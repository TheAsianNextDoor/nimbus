export const destructureAttribute = (attribute: string) => (obj: { [key: string]: any }): any => obj[attribute];
