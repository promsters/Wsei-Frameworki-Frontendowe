export interface User {
    loading: boolean;
    name: string;
    email: string;
    company: UserCompany;
    avatar: string;
    address: UserAddress;
    phone: string;
    skills: {
        expertise: string[];
        specialities: string[];
        admissions: string[];
        counties: string[];
    }
}

export interface UserAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    }
}

export interface UserCompany {
    name: string;
}
