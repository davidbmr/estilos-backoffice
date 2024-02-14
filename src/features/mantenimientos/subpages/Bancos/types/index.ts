export interface BankProps {
	code?: string;
	name: string;
	address: string;
	phone: string | undefined;
	email: string | undefined;
}

export interface BankDataProps extends Omit<BankProps, "phone1" | "phone2"> {
	phones: [string | undefined, string | undefined];
}
