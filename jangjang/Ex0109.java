package codingtest.ct.week01;

public class Ex0109 {
	public static void main(String[] args) {
		ep:
		while(true) {
			for(int i = 0; i < 100; i++) {
				if(i == 50) {
					break ep; // break를 만나면 ep로 간다. 반복문이 2개일 경우.
				}
				System.out.println(i);
			}
		}
		
		
	}
}
