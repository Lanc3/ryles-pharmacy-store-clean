import clsx from 'clsx';

import {Heading} from '~/components';

export function PageHeader({
  children,
  className,
  heading,
  variant = 'default',
  ...props
}) {
  const variants = {
    default:
      'grid w-full gap-8 p-6 py-8 md:p-8 lg:p-12 justify-center text-center justify-items-center',
    blogPost:
      'grid md:text-center w-full gap-4 p-6 py-8 md:p-8 lg:p-12 md:justify-items-center',
    allCollections:
      'flex justify-between items-baseline gap-8 p-6 md:p-8 lg:p-12 px-10',
  };

  const styles = clsx(variants[variant], className);

  return (
    <header {...props} className={styles}>
      {heading && (
        <Heading
          as="h1"
          width="narrow"
          size="heading"
          className="flex w-full text-white bg-rylesgold rounded-xl px-10"
        >
          {heading}
        </Heading>
      )}
      {children}
    </header>
  );
}
