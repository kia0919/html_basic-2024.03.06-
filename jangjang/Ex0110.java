package codingtest.ct.week01;

public class Ex0110 {
	public static void main(String[] args) {
		for(int i = 1; i < 100; i++) {
			if (i % 2 == 0) continue;
			
			System.out.println(i);
		}
	}
}
