export const groupBy = (xs: Array<any>, key: string) => (
  xs.reduce(function(rv:any, x:any) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {})
);
