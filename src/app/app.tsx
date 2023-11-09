import EditableText from "components/ui/EditableText";

function App(): React.ReactElement {
  return (
    <div>
      <video autoPlay loop muted className="absolute w-full h-full object-cover z-0 top-0 left-0" src="/video/CosmonicHDNoText.mp4" />
      <div className="absolute w-full h-full bg-black opacity-50 z-10 top-0 left-0" />
      <main className="flex items-center justify-center">
        <div className="p-4 relative z-20 shadow-xl">
          <img src="/images/cosmonic_stacked.svg" className="w-52 h-auto mb-12 mx-auto" />
          <h1 className="text-cosmo-purple-300 text-4xl font-semibold mb-12">
            <EditableText id="title">Distribute complex apps, simply.</EditableText>
          </h1>
          <ul className="text-xl font-medium text-center">
            <li className="mb-2"><EditableText id="point1">Open-core, Distributed, WebAssembly Platform</EditableText></li>
            <li className="mb-2"><EditableText id="point2">Secure Sandbox, Deny by default security model</EditableText></li>
            <li className="mb-2"><EditableText id="point3">Decoupled Capabilities through Contract-driven development</EditableText></li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
