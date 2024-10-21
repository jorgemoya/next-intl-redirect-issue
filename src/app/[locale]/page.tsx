import { useTranslations } from "next-intl";
import Link from "next/link";
import { Link as NextIntlLink } from "@/src/i18n/routing";

export default function IndexPage() {
  const t = useTranslations("IndexPage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <div>
        <Link href="/?foo=Hello&bar=World">Next Link with params</Link>
      </div>
      <div>
        <NextIntlLink href="/?foo=Hello&bar=World">
          Next Intl Link with params
        </NextIntlLink>
      </div>
    </div>
  );
}
