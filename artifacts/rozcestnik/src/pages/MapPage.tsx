import PageLayout from "@/components/PageLayout";

export default function MapPage() {
  return (
    <PageLayout title="Mapa" backPath="/">
      <div style={{ display: "flex", flexDirection: "column", height: "calc(100vh - 70px)" }}>
        <iframe
          src="https://frame.mapy.cz/?x=15.338&y=49.75&z=8&base=turist&lang=cs"
          style={{
            width: "100%",
            flex: 1,
            border: "none",
            display: "block",
          }}
          title="Turistická mapa"
          allowFullScreen
        />
      </div>
    </PageLayout>
  );
}
