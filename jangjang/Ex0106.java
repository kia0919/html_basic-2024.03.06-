package codingtest.ct.week01;

public class Ex0106 {
	public static void main(String[] args) {
		for(int i = 0; i < 10; ++i) { // i++ -> 실행이 다 끝나면 증가시키겠다.
			System.out.println(i);
		}
		String[] arrays = {"a", "b", "c", "d", "e"};
		for(int i = 0; i < arrays.length; i++) {
			System.out.println(arrays[i]);
		}
		for(String s: arrays) {  
			System.out.println(s);
		}
		
		int[] numbers = {1, 2, 3, 4, 5};
		for(int i = 0; i < numbers.length; i++) {
			System.out.println(numbers[i]);
		}
		
		for(int number: numbers) {
			System.out.println(number);
		}
	}
}
