import { Switch, Route } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "@/pages/Home";
import MapPage from "@/pages/MapPage";
import TrasyPage from "@/pages/TrasyPage";
import ZebricekPage from "@/pages/ZebricekPage";
import PravidlaPage from "@/pages/PravidlaPage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/mapa" component={MapPage} />
        <Route path="/trasy" component={TrasyPage} />
        <Route path="/zebricek" component={ZebricekPage} />
        <Route path="/pravidla" component={PravidlaPage} />
        <Route component={NotFound} />
      </Switch>
    </QueryClientProvider>
  );
}
