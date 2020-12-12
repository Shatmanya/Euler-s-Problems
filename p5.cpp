#include<iostream>
using namespace std;

int main{
    int d;
    d=1000000; 
    for(int i = 20; i <= d; i++){
        bool found = true;
        cout<<i;
        for(int e = 2; e <= 20; e++){
            if (i % e != 0) {
                found = false;
                break; // stop testing other divisors
            }
    }
    if (found) {
        return i;
        cout<<i;
        }
	}
}