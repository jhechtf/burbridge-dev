import type React from 'react';
import Media from '$lib/components/media/media';
import Icon from '@mdi/react';
import { mdiDevTo, mdiGitlab, mdiLinkedin, mdiStackOverflow } from '@mdi/js';

export default function Socials() {
  return (
    <section className="p-5">
      <h1 className="font-display text-emerald-700 text-4xl text-center">Connect with Me</h1>
      <p
        className="text-center text-md italic pb-2"
      >I'm on most of the usual developer hangouts, so if you'd like an idea of the sort of things I do, please follow these links below.</p>
      <section className="grid md:grid-rows-1 md:grid-cols-4 gap-3 w-10/12 mx-auto">
        <a
          href="https://gitlab.com/jhechtf"
          className="underline flex justify-center text-2xl border rounded-md my-2"
          target="_blank"
        >
          <Media leftElement={<Icon path={mdiGitlab} size={1.5}/>}>
            <div className="pl-2">Gitlab</div>
          </Media>
        </a>
        <a
          href="https://linkedin.com/in/james-burbridge"
          className="underline flex justify-center text-2xl border rounded-md my-2"
          target="_blank"
        >
          <Media leftElement={<Icon path={mdiLinkedin} size={1.5} />}>
            <div className="pl-2">LinkedIn</div>
          </Media>
        </a>

        <a
          href="https://stackoverflow.com/users/2825551/jhecht?tab=profile"
          className="underline flex justify-center text-2xl border rounded-md my-2"
          target="_blank"
        >
          <Media leftElement={<Icon path={mdiStackOverflow} size={1.5} />}>
            <div className="pl-2">StackOverflow</div>
          </Media>
        </a>
        <a
          href="https://dev.to/jhechtf"
          className="underline flex justify-center text-2xl border rounded-md my-2"
          target="_blank"
        >
          <Media leftElement={<Icon path={mdiDevTo} size={1.5} />}>
            <div className="pl-2">Dev.To</div>
          </Media>
        </a>
      </section>
    </section>
  );
}