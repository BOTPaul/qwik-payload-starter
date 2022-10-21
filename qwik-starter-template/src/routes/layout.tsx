import { Slot, component$ } from '@builder.io/qwik';

import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main class="w-2/3 m-auto">
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer class="mt-8 w-2/3 m-auto">
        <a href="https://www.builder.io/" target="_blank">
          Made with ♡ by Builder.io
        </a>
      </footer>
    </>
  );
});
