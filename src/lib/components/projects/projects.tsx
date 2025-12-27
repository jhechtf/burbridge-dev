import { useEffect, useState } from 'react';
import { GitCompare, GitFork, ExternalLink } from 'lucide-react';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

type FuckIt = Awaited<ReturnType<typeof octokit.repos.listForUser>>;

export interface ThingProps {
  left: React.ReactNode;
  right: React.ReactNode;
  title?: string;
}

function Thing({
  left, right,
  title
}: ThingProps) {
  return (
    <div className="rounded-full border border-zinc-400 flex gap-2 items-center" title={title}>
      <div className="bg-zinc-400 px-2 py-1 rounded-l-full">
        {left}
      </div>
      <div className="pr-2">
        {right}
      </div>
    </div>
  )
}

export default function Projects() {
  const [data, setData] = useState<FuckIt['data']>([]);
  useEffect(() => {
    const controller = new AbortController();
    octokit.repos.listForUser({
      username: 'jhechtf',
      sort: 'updated',
      type: 'all',
      per_page: 12,
      request: {
        signal: controller.signal,
      }
    }).then(d => {
      setData(d.data.filter(f => !f.fork));
    });

    /**
     * aborts the request if the components gets unmounted before it completes.
     */
    return () => {
      controller.abort()
    }
  }, []);
  return (
    <div className='@4xl/projects:grid-cols-4 @2xl/projects:grid-cols-3 @xs/projects:grid-cols-1 @md/projects:grid-cols-2 grid gap-4 py-6 px-4 bg-zinc-200 max-h-screen overflow-auto'>
      {
        data.map(d => (
          <div key={`project-${d.id}`} className="p-5 border rounded-lg overflow-hidden bg-zinc-100 shadow">
            <header className="text-2xl font-semibold text-emerald-700 mb-2">
              <a href={d.html_url} className='hover:text-emerald-500 hover:underline' target='_blank'>
                {d.name}
              </a>
            </header>
            <section>
              <p className="whitespace-break-spaces">
                {d.description ?? <em>No description given</em>}
              </p>
              {
                d.homepage && <a href={d.homepage} className="inline-flex gap-2">{d.homepage} <ExternalLink size={16} /></a>
              }
              <div className="p-2 flex-wrap md:flex-nowrap inline-flex gap-2 justify-center">
                <Thing right={d.open_issues_count}  left={<GitCompare size={16} />} title="Open Issues"/>
                <Thing right={d.forks} left={<GitFork size={16}/>} title="Forks"/>
              </div>
            </section>
          </div>
        ))
      }
    </div>
  );
}
