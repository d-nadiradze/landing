import { Locale } from "@/shared/intl";

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ locale: Locale; serviceId: string }>;
}) {
    const { serviceId, locale } = await params;

    return (
        <div className="container mx-auto">
        </div>
    );
}
