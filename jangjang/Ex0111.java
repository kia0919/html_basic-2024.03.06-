package codingtest.ct.week01;

public class Ex0111 {
	public static void main(String[] args) {
	
		/*
		 * 구구단
		 * 2 * 1 = 2
		 * .
		 * .
		 * .
		 * 2 * 9 = 18
		 *
		 */
		
		for(int i = 2; i < 10; i++) {
			for(int j = 1; j < 10; j++) {
				System.out.printf("%d * %d = %2d\n", i, j, i*j);
				// 2d 오른쪽 정렬, -2d 왼쪽 정렬?
			}
			System.out.println();
		}	
	}
}

// 자바 포맷 검색해서 참고하기