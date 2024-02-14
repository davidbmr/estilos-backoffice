export const appRoutesMantenimientos = [
	// {
	// 	group: true,
	// 	groupName: "Dashboard",
	// 	routes: [
	// 		{
	// 			path: "/dashboard",
	// 			sidebarProps: {
	// 				displayText: "Dashboard",
	// 			},
	// 		},
	// 	],
	// },

	{
		group: true,
		groupName: "Clientes",
		routes: [
			{
				path: "/clientes",
				sidebarProps: {
					displayText: "Clientes",
				},
			},
			{
				path: "/establecimientos",
				sidebarProps: {
					displayText: "Establecimientos",
				},
			},
			{
				path: "/sedes",
				sidebarProps: {
					displayText: "Sedes",
				},
			},
			{
				path: "/transaccion",
				sidebarProps: {
					displayText: "Transacciones",
				},
			},
		],
	},

	{
		group: true,
		groupName: "Usuarios backoffice",
		routes: [
			{
				path: "/usuarios",
				sidebarProps: {
					displayText: "Usuarios backoffice",
				},
			},
			{
				path: "/lista-roles",
				sidebarProps: {
					displayText: "Lista de roles",
				},
			},
		],
	},

	{
		group: true,
		groupName: "Modulos",
		routes: [
			{
				path: "/tarjetas-vinculadas",
				sidebarProps: {
					displayText: "Tarjetas vinculadas",
				},
			},
			// {
			// 	path: "/credicash-solicitados",
			// 	sidebarProps: {
			// 		displayText: "Credicash solicitados",
			// 	},
			// },
			{
				path: "/recarga-billetera",
				sidebarProps: {
					displayText: "Recarga de billetera",
				},
			},
		],
	},

	{
		group: true,
		groupName: "Categorización",
		routes: [
			{
				path: "/rubro",
				sidebarProps: {
					displayText: "Rubro",
				},
			},
			{
				path: "/categoria",
				sidebarProps: {
					displayText: "Categorías",
				},
			},
		],
	},

	{
		group: true,
		groupName: "Páginas y FAQs",
		routes: [
			// {
			// 	path: "/menu-ayuda",
			// 	sidebarProps: {
			// 		displayText: "Menú de ayuda",
			// 	},
			// },
			{
				path: "/paginas-informativas",
				sidebarProps: {
					displayText: "Páginas informativas",
				},
			},
		],
	},

	{
		group: true,
		groupName: "Ubicación",
		routes: [
			{
				path: "/departamentos",
				sidebarProps: {
					displayText: "Departamentos",
				},
			},
			{
				path: "/provincias",
				sidebarProps: {
					displayText: "Provincias",
				},
			},
			{
				path: "/distritos",
				sidebarProps: {
					displayText: "Distritos",
				},
			},
		],
	},

	{
		group: true,
		groupName: "Configuración",
		routes: [
			{
				path: "/configuracion-general",
				sidebarProps: {
					displayText: "Configuración general",
				},
			},
			{
				path: "/bancos",
				sidebarProps: {
					displayText: "Bancos",
				},
			},
			{
				path: "/banner-principal",
				sidebarProps: {
					displayText: "Banners principales",
				},
			},
		],
	},

	// {
	// 	group: true,
	// 	groupName: "Productos",
	// 	routes: [
	// 		{
	// 			path: "/productos",
	// 			sidebarProps: {
	// 				displayText: "Productos",
	// 			},
	// 		},
	// 		// {
	// 		// 	path: "/promociones",
	// 		// 	sidebarProps: {
	// 		// 		displayText: "Promociones",
	// 		// 	},
	// 		// },
	// 	],
	// },

	{
		group: true,
		groupName: "Logs",
		routes: [
			// {
			// 	path: "/historial-uso",
			// 	sidebarProps: {
			// 		displayText: "Historial de uso",
			// 	},
			// },
			{
				path: "/log-fallas",
				sidebarProps: {
					displayText: "Log de fallas",
				},
			},
		],
	},
];
