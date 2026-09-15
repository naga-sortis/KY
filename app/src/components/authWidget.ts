import { authAvailable, signInWithGitHub, signInWithGoogle, signOutUser, watchAuth } from '../lib/auth';
import type { CurrentUser } from '../lib/auth';
import { escapeHtml, toast } from '../lib/dom';
import { brandIcon, icon } from './icons';

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const chars = parts.length >= 2 ? `${parts[0]![0]}${parts[1]![0]}` : name.slice(0, 2);
  return chars.toUpperCase();
}

function signedOutHtml(): string {
  return `<div class="relative" data-auth-root>
  <button type="button" data-auth-open class="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-1.5 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:text-white">
    ${icon('user', 'h-4 w-4')} Sign in
  </button>
</div>`;
}

function signedInHtml(user: CurrentUser): string {
  const avatar = user.photoUrl
    ? `<img src="${escapeHtml(user.photoUrl)}" alt="" class="h-7 w-7 rounded-full object-cover"/>`
    : `<span class="grid h-7 w-7 place-items-center rounded-full bg-brand/30 text-[11px] font-bold text-white">${escapeHtml(initials(user.name))}</span>`;
  return `<div class="relative" data-auth-root>
  <button type="button" data-auth-open class="flex items-center gap-2 rounded-lg border border-white/15 px-2 py-1.5 transition hover:border-white/30">
    ${avatar}
    <span class="hidden max-w-[9rem] truncate text-sm font-medium text-slate-200 sm:inline">${escapeHtml(user.name)}</span>
  </button>
</div>`;
}

function menuHtml(user: CurrentUser | null): string {
  if (!user) {
    return `<div data-auth-menu class="absolute right-0 top-[calc(100%+8px)] z-50 w-64 rounded-xl border border-slate-200 bg-white p-2 text-left shadow-xl">
    <p class="px-2 pb-2 pt-1 text-xs leading-relaxed text-slate-500">Sign in to sync your audit history across devices. Running an audit never requires this.</p>
    <button type="button" data-auth-google class="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
      ${brandIcon('google', 'h-4 w-4')} Continue with Google
    </button>
    <button type="button" data-auth-github class="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
      ${brandIcon('github', 'h-4 w-4')} Continue with GitHub
    </button>
  </div>`;
  }
  return `<div data-auth-menu class="absolute right-0 top-[calc(100%+8px)] z-50 w-64 rounded-xl border border-slate-200 bg-white p-2 text-left shadow-xl">
    <div class="px-2.5 py-2">
      <p class="truncate text-sm font-bold text-slate-900">${escapeHtml(user.name)}</p>
      ${user.email ? `<p class="truncate text-xs text-slate-500">${escapeHtml(user.email)}</p>` : ''}
    </div>
    <div class="my-1 border-t border-slate-100"></div>
    <button type="button" data-auth-signout class="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
      ${icon('logout', 'h-4 w-4')} Sign out
    </button>
  </div>`;
}

/**
 * Mounts a self-contained sign-in widget into `container` and keeps it in sync
 * with Firebase auth state. Returns an unsubscribe function for cleanup on
 * re-render. When Firebase isn't configured for this build, it renders
 * nothing rather than a dead button.
 */
export function mountAuthWidget(container: HTMLElement): () => void {
  if (!authAvailable()) {
    container.innerHTML = '';
    return () => {};
  }

  let current: CurrentUser | null = null;

  const render = (): void => {
    container.innerHTML = current ? signedInHtml(current) : signedOutHtml();
    wire();
  };

  const closeMenu = (): void => {
    container.querySelector('[data-auth-menu]')?.remove();
  };

  const wire = (): void => {
    const openBtn = container.querySelector<HTMLElement>('[data-auth-open]');
    const root = container.querySelector<HTMLElement>('[data-auth-root]');
    if (!openBtn || !root) return;

    openBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (root.querySelector('[data-auth-menu]')) {
        closeMenu();
        return;
      }
      root.insertAdjacentHTML('beforeend', menuHtml(current));
      root.querySelector<HTMLElement>('[data-auth-google]')?.addEventListener('click', async () => {
        closeMenu();
        try {
          await signInWithGoogle();
        } catch {
          toast('Google sign-in failed. Try again.');
        }
      });
      root.querySelector<HTMLElement>('[data-auth-github]')?.addEventListener('click', async () => {
        closeMenu();
        try {
          await signInWithGitHub();
        } catch {
          toast('GitHub sign-in failed. Try again.');
        }
      });
      root.querySelector<HTMLElement>('[data-auth-signout]')?.addEventListener('click', async () => {
        closeMenu();
        await signOutUser();
        toast('Signed out');
      });
    });
  };

  document.addEventListener('click', closeMenu);

  const unsubscribe = watchAuth((user) => {
    current = user;
    render();
  });

  return () => {
    document.removeEventListener('click', closeMenu);
    unsubscribe();
  };
}
