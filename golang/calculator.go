package main 

import ("fmt")

func main() {
	var x,y int 
	fmt.Println("please input the values of x and y")
	_, err := fmt.Scanf("%d", &x)
	if err != nil {
		fmt.Println("Error occured cannot calculate sum")
	}
	_,err = fmt.Scanf("%d",&y)

	if err !=nil {
		fmt.Println("Error occured cannot calculate sum")
	}

	fmt.Println("the sum is : %d" , x+y )
}