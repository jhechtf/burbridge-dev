import { mount } from '@vue/test-utils';
import { test, assert } from 'vitest';
import Logo from './Logo.vue';

// This is here mostly because I need to validate that vitest is running
test('Test Logo', async () => {
  const wrapper = mount(Logo);
  assert(wrapper.isVisible);
})