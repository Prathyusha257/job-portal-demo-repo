import { defaultProfile, getProfile, saveProfile } from './profile-store';

const ACCOUNTS_KEY = 'careerGridAccounts';
const SESSION_KEY = 'careerGridSession';

export interface Account {
  name: string;
  email: string;
  password: string;
}

function getAccounts(): Record<string, Account> {
  const raw = localStorage.getItem(ACCOUNTS_KEY);
  return raw ? JSON.parse(raw) : {};
}

function saveAccounts(accounts: Record<string, Account>) {
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
}

export function hasAnyAccount(): boolean {
  return Object.keys(getAccounts()).length > 0;
}

export function accountExists(email: string): boolean {
  return !!getAccounts()[email.trim().toLowerCase()];
}

export function createAccount(account: Account) {
  const key = account.email.trim().toLowerCase();
  const accounts = getAccounts();

  accounts[key] = {
    name: account.name.trim(),
    email: key,
    password: account.password
  };

  saveAccounts(accounts);

  if (!getProfile(key)) {
    saveProfile(key, defaultProfile(account.name.trim(), key));
  }
}

export function login(email: string, password: string): boolean {
  const key = email.trim().toLowerCase();
  const account = getAccounts()[key];

  if (!account || account.password !== password) {
    return false;
  }

  localStorage.setItem(SESSION_KEY, key);
  return true;
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}

export function isLoggedIn(): boolean {
  return !!getCurrentEmail();
}

export function getCurrentEmail(): string | null {
  const email = localStorage.getItem(SESSION_KEY);

  if (!email || !getAccounts()[email]) {
    return null;
  }

  return email;
}
