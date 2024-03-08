package codingtest.ct.week01;

public class Ex0115 {
	public static void main(String[] args) {
		String str1 = "aaa";
		String str2 = "aaa";
		System.out.println(str1.equals(str2));
		System.out.println(str1 == str2);
		
		String str3 = new String("aaa");
		String str4 = new String("aaa");
		System.out.println(str3 == str4); 
		//값은 같아도 주소가 다르다
		System.out.println(str1 == str4);
		System.out.println(str1.equals(str3));
		
		// 값과 메모리 주소가 같아야한다. 
		// 문자열 비교는 == 말고 equals로 비교하자
	}
	
}
