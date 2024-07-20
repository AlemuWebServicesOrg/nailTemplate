export interface Nail {    
    id?: number;
    image: string;
    name: string;
    shape: string;
    price: string;
};

export interface Shape {
    id?: number;
    image: string;
    title: string;
}

export interface Filter {
    id?: number;
    text: string;
    value: string;
};

export interface Faq {
    id?: number;
    question: string;
    answer: string;
};

export interface Preview {
    ["shape"]: string;
    ["length"]: string;
    ["color"]: string;
    ["colorType"]: string;
};