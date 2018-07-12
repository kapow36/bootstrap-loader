interface BoostrapLoaderOptions {
	loadingdelay?: number;
}

type BootstrapLoaderAction = "show" | "hide";

interface JQuery {
	bootstrapLoader(): JQuery;
	bootstrapLoader(options: BoostrapLoaderOptions): JQuery;
	bootstrapLoader(action: BootstrapLoaderAction): JQuery;
}
