package codingtest.ct.week01;

public class Ex0114 {
	public static void main(String[] args) {
		String str = "Good Morning";
		
		System.out.println("charAt : " + str.charAt(7));
		System.out.println("startsWith : " + str.startsWith("good"));
		// 대소문자 구분 하는 듯?
		System.out.println("endswith " + str.endsWith("ng"));
		System.out.println("equals : " + str.equals("good"));
		System.out.println("indexOf : " + str.indexOf("Mor"));
		// Mor의 제일 앞의 문자 인덱스를 리턴
		System.out.println("lastIndexOf : " + str.lastIndexOf("Mor"));
		// 뒤에서부터
		System.out.println("length : " + str.length());
		
		System.out.println("replace : " + str.replace("Good", "a"));
		System.out.println("replace : " + str.replace("o", "a"));
		// 현재 버전은 모든 o를 a로 바꾼다. 예전에는 처음 만나는 o만 바꿨다.
		System.out.println("replaceAll : " + str.replaceAll("Good", "a"));
		// Good를 a로 바꿔라.
		System.out.println("replaceAll : " + str.replaceAll("[Good]", "a"));
		// 대문자 G이거나 소문자 o이거나 소문자 d이면 모두 a로 바꿔라.
	
	
	}
}
