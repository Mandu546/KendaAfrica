import HorizontalSection from "./HorizontalSection";

export default function RelatedServices({
  title,
  items,
}) {
  if (!items?.length)
    return null;

  return (
    <div className="mt-16">
      <HorizontalSection
        title={title}
        items={items}
      />
    </div>
  );
}