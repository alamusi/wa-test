/**
 * Java Implementation
 */

class Cal {
  public static int fibo (int n) {
    if (n < 2) {
      return n;
    } else {
      return fibo(n - 2) + fibo(n - 1);
    }
  }

  public static double slow (double n) {
    double result = 0;
    double invN = 1 / n;
    int i = 0;
    while (i < n) {
      double x = Math.pow(i * invN, 7);
      result += Math.atan(x) * Math.tan(x);
      i++;
    }
    return result;
  }

  public static void main (String[] args) {
    long start = System.currentTimeMillis();
    int result = fibo(40);
    long finish = System.currentTimeMillis();
    System.out.println("fibo " + result + " in Java runs " + (finish - start));

    start = System.currentTimeMillis();
    double r2 = slow(10000000);
    finish = System.currentTimeMillis();
    System.out.println("slow " + r2 + " in Java runs " + (finish - start));
  }
}