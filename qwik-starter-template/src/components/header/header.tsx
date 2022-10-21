import { QwikLogo } from '../icons/qwik';
import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <header class="p-4 flex justify-between">
      <div>
        <a href="https://qwik.builder.io/" target="_blank">
          <QwikLogo />
        </a>
      </div>
      <ul class="flex gap-4">
        <li class="underline text-blue-500 hover:text-blue-800">
          <a href="https://qwik.builder.io/docs/components/overview/" target="_blank">
            Docs
          </a>
        </li>
        <li class="underline text-blue-500 hover:text-blue-800">
          <a href="https://qwik.builder.io/examples/introduction/hello-world/" target="_blank">
            Examples
          </a>
        </li>
        <li class="underline text-blue-500 hover:text-blue-800">
          <a href="https://qwik.builder.io/tutorial/welcome/overview/" target="_blank">
            Tutorials
          </a>
        </li>
      </ul>
    </header>
  );
});
