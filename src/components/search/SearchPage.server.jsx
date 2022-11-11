import {Heading, Input, PageHeader} from '~/components';
import {Layout} from '~/components/index.server';

export function SearchPage({searchTerm, children}) {
  return (
    <Layout>
      <PageHeader>
        <Heading as="h1" size="copy">
          <div className="text-white">Search</div>
        </Heading>
        <form className="relative flex w-full text-heading text-white">
          <Input
            defaultValue={searchTerm}
            placeholder="Search…"
            type="search"
            variant="search"
            name="q"
          />
          <button className="absolute right-0 py-2 text-white" type="submit">
            Go
          </button>
        </form>
      </PageHeader>
      {children}
    </Layout>
  );
}
