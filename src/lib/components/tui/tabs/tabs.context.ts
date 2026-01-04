import { createContext, type Snippet } from 'svelte';

export type TabContext = {
	active: Tab | null;
	tabs: Tab[];
};

export type Tab = {
	header: Snippet<[{ active: boolean }]>;
	content: Snippet<[]>;
};

export const [getTabContext, setTabContext] = createContext<TabContext>();
