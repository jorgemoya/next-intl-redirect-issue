import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import PageLayout from '@/components/PageLayout';
import {redirect} from '@/i18n/routing';

type Props = {
  params: {locale: string};
};

async function redirectAction() {
  'use server';

  redirect('/pathnames');
}

export default function IndexPage({params: {locale}}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('IndexPage');

  return (
    <PageLayout title={t('title')}>
      <form action={redirectAction}>
        <button className="border-solid p-3 text-7xl" type="submit">
          Click to redirect
        </button>
      </form>
    </PageLayout>
  );
}
