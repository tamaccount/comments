import { PreviewComments } from './components/PreviewComments';
import { ThemeToggle } from './components/ThemeToggle';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background-200 p-8">
      <div className="w-full max-w-[444px]">
        <PreviewComments />
      </div>
      <ThemeToggle />
    </main>
  );
}
