// upto n prime number 

// #include <stdio.h>

// int main() {
//     int N, i, j;

//     // Input for N
//     printf("Enter the value of N: ");
//     scanf("%d", &N);

//     printf("Prime numbers from 2 to %d:\n", N);

//     for (i = 2; i <= N; i++) { // Loop through numbers from 2 to N
//         for (j = 2; j < i; j++) { // Check divisors from 2 to i-1
//             if (i % j == 0) { // If divisible, it's not prime
//                 break;
//             }
//         }
//         if (j == i) { // If no divisors found, it's prime
//             printf("%d ", i);
//         }
//     }

//     printf("\n");
//     return 0;
// }

// to print this pattern
// 1 1 1 1 
// 2 2 2 2   no. of  rows=outer loop
// 3 3 3 3   no .of  columns=inner loop
// 4 4 4 4 
// ==>>
// // Online C++ compiler to run C++ program online
// #include <iostream>
// using namespace std;
// int main() {
//   for(int i=1;i<=4;i++){
//      for(int j=1;j<=4;j++){
//          cout<<i<<" ";
//      }
//      cout<<'\n';
//   }

//     return 0;
// }


// to print this pattern
// *
// **
// ***
// ****
// #include <iostream>
// using namespace std;
// int main() {
//   int n=4;
//   int i,j;
//   for( i=1;i<=n;i++){
//       for(j=1;j<=i;j++){
//           cout<<"*";
//       }
//       cout<<"\n";
//   }
//     return 0;
// }

// to print this 
// ****                                         
// ***
// **
// *
// #include <iostream>
// using namespace std;
// int main() {
//     int n=4;
//     int i,j;
//  for(i=n;i>0;i--){
//      for(j=i;j>0;j--){
//          cout<<"*";
//      }
//      cout<<"\n";
//  }
//     return 0;
// }
// 2nd approach to this 
// #include <iostream>
// using namespace std;
// int main() {
//     int n=4;
//     int i,j;
//  for(i=1;i<=n;i++){
//      for(j=1;j<=n-i+1;j++){
//          cout<<"*";
//      }
//      cout<<"\n";
//  }
//     return 0;
// }


// for this patter 
// 1
// 12
// 123
// 1234

// #include <iostream>
// using namespace std;
// int main() {
//     int n=4;
//     int i,j;
//  for(i=1;i<=n;i++){
//      for(j=1;j<=i;j++){
//          cout<<j;
//      }
//      cout<<"\n";
//  }
//     return 0;
// }

// for this pattern 
// A
// BC
// DEF
// GHIJ
// #include <iostream>
// using namespace std;
// int main() {
//     int n=4;
//     int i,j;
//     char ch='A';
//  for(i=1;i<=n;i++){
//      for(j=1;j<=i;j++){
//          cout<<ch;
//          ch++;
//      }
//      cout<<"\n";
//  }
//     return 0;
// }

// to print hollow rectangle 
// *****
// *   *
// *   *
// *****
// #include <iostream>
// using namespace std;
// int main() {
//    int n=4;
//    int i,j;
//    for(i=1;i<=n;i++){
//        cout<<"*";
//        for(j=1;j<=n-1;j++){
//            if(i==1||i==n){
//                cout<<"*";
//            }else{
//                cout<<" ";
//            }
//        }
//         cout<<"*"<<"\n";
//    }
//     return 0;
// }