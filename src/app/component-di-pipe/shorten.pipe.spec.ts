import {ShortenPipe} from './shorten.pipe';

describe('ShortenPipe', () => {
  let pipe;
  beforeEach(() => {
    pipe = new ShortenPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return null when provide a falsy text value', () => {
    expect(pipe.transform(null)).toBeFalsy();
  });

  it('should return 140 character + "..." by default', () => {
    const text = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a 
    piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor
     at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem 
     Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
      Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
       Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the 
       Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32
       .`;
    expect(pipe.transform(text).length).toEqual(143);
  });

  it('should return number of character provided in second arguments + "..." by default', () => {
    const text = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a 
    piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor
     at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem 
     Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
      Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
       Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the 
       Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32
       .`;
    const limit = 10;
    expect(pipe.transform(text, limit).length).toEqual(limit + 3);
  });
});
