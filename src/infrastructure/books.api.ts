export class BookDto {
  constructor(
    public title: string,
    public subtitle: string,
    public isbn13: string,
    public price: string,
    public image: string,
    public url: string,
  ) {}
}
export class AboutBookDto {
  constructor(
    public authors: string = '',
    public desc: string = '',
    public image: string = '',
    public isbn10: string = '',
    public isbn13: string = '',
    public language: string = '',
    public pages: string = '',
    public price: string = '',
    public publisher: string = '',
    public rating: string = '',
    public subtitle: string = '',
    public title: string = '',
    public url: string = '',
    public year: string = '',
  ) {}
}

const BOOK_SERVICE_URL = 'https://api.itbook.store/1.0/';

export const getBooksByReq = async (
  req: string,
  page?: string,
): Promise<BookDto[] | null> => {
  try {
    const url = `${BOOK_SERVICE_URL}search/${req}?page=${page}`;
    const resJson = await fetch(url);
    const res = await resJson.json();
    return res.books ?? [];
  } catch (err) {
    console.dir(err.message);
    return null;
  }
};

export const getBookById = async (
  isbn13: string,
): Promise<AboutBookDto | null> => {
  try {
    const url = `${BOOK_SERVICE_URL}books/${isbn13}`;
    const resJson = await fetch(url);
    const res = await resJson.json();
    return res;
  } catch (err) {
    console.log(err);
    return null;
  }
};
