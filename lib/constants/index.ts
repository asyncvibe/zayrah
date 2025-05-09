export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Zayrah";
export const APP_DESCRIPTION = "Zayrah is an ecommerce platform for clothing.";
export const SERVER_URL =
	process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
export const LATEST_PRODUCTS_LIMIT =
	Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;
export const signInDefaultValues = {
	email: "user@example.com",
	password: "123456",
};
export const shippingAddressDefaultValues = {
	fullName: "",
	streetAddress: "",
	city: "",
	postalCode: "",
	country: "",
};
export const PAYMENT_METHODS = process.env.PAYMENT_METHODS
	? process.env.PAYMENT_METHODS.split(",")
	: ["PayPal,Stripe,CashOnDelivery"];
export const DEFAULT_PAYMENT_METHOD =
	process.env.DEFAULT_PAYMENT_METHOD || "PayPal";
export const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 3;
export const productDefaultValues = {
	name: "",
	slug: "",
	description: "",
	images: [],
	category: "",
	brand: "",
	stock: 0,
	isFeatured: false,
	banner: null,
	price: "0",
	numReviews: "0",
	rating: "0",
};
