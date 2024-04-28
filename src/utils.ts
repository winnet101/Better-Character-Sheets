function typedJson<T>(res: Response) {
  return res.json() as T;
}

export { typedJson };
