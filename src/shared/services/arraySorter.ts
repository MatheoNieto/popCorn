class ArraySorter {
  static instance: ArraySorter;

  static getInstance() {
    if (!ArraySorter.instance) {
      ArraySorter.instance = new ArraySorter();
    }
    return ArraySorter.instance;
  }

  public sortStringsAsc(data: string[]): string[] {
    return [...data].sort((a, b) => a.localeCompare(b));
  }

  public sortStringsDesc(data: string[]): string[] {
    return [...data].sort((a, b) => b.localeCompare(a));
  }

  public sortObjectsAsc<T>(data: T[], key: keyof T): T[] {
    return [...data].sort((a, b) => {
      const valA = a[key];
      const valB = b[key];

      if (typeof valA === 'string' && typeof valB === 'string') {
        return valA.localeCompare(valB);
      }
      return (valA as any) - (valB as any);
    });
  }

  public sortObjectsDesc<T>(data: T[], key: keyof T): T[] {
    return [...data].sort((a, b) => {
      const valA = a[key];
      const valB = b[key];

      if (typeof valA === 'string' && typeof valB === 'string') {
        return valB.localeCompare(valA);
      }

      return (valB as any) - (valA as any);
    });
  }
}

export const arraySorter = ArraySorter.getInstance();
