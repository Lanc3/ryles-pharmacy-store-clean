import {Image, Link} from '@shopify/hydrogen';
import {Grid, Heading, Section} from '~/components';

export function FeaturedCollections({data, title = 'Collections', ...props}) {
  const items = data.filter((item) => item.image).length;
  const haveCollections = data.length > 0;
  if (!haveCollections) return null;

  return (
    <Section {...props}>
      <div className="text-white">{title}</div>
      <Grid items={items}>
        {data.map((collection) => {
          if (!collection?.image) {
            return null;
          }
          // TODO: Refactor to use CollectionCard
          return (
            <Link key={collection.id} to={`/collections/${collection.handle}`}>
              <div className="grid gap-4 text-white">
                <div className="card-image bg-primary/5 aspect-[3/2]">
                  {collection?.image && (
                    <Image
                      alt={`Image of ${collection.title}`}
                      data={collection.image}
                      height={100}
                      sizes="(max-width: 32em) 100vw, 33vw"
                      width={150}
                      widths={[400, 500, 600, 700, 800, 900]}
                      loaderOptions={{
                        scale: 2,
                        crop: 'center',
                      }}
                    />
                  )}
                </div>
                <Heading size="copy">
                  <div className="text-white">{collection.title}</div>
                </Heading>
              </div>
            </Link>
          );
        })}
      </Grid>
    </Section>
  );
}
