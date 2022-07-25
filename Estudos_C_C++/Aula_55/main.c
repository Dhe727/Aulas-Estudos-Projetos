#include <stdio.h>
#include <stdlib.h>

int main() {
  // Create variables
  int myNum = 5;               // Integer (whole number)
  float myFloatNum = 5.99;     // Floating point number
  char myLetter = 'D';         // Character

  // Print variables
  printf("%d\n", myNum);
  printf("%f\n", myFloatNum);
  printf("%c\n", myLetter);



  printf("My favorite number is: %d\n", myNum);

  //Para imprimir diferentes tipos em uma única função printf(), você pode usar o seguinte:

  printf("My number is %d\n and my letter is %c\n", myNum, myLetter);



  //Declare várias variáveis


   int x = 5, y = 6, z = 50;
  printf("%d\n", x + y + z);

  /*Boa prática
Outra coisa sobre variáveis ​​constantes,
é que é considerado uma boa prática
declará-las com letras maiúsculas.
Não é obrigatório, mas útil para
legibilidade do código e comum
para programadores C:*/

const int BIRTHYEAR = 1980;

  printf("%d\n", BIRTHYEAR);

  //Agora criamos uma variável que contém um array de quatro inteiros.

  int myNumbers[] = {25, 50, 75, 100};

  printf("%d\n", myNumbers[0]);

  myNumbers[0] = 33;

  printf("%d\n", myNumbers[0]);


//--------------------------------------------------------------------------------------------------------
//Para alterar o valor de um elemento específico, consulte o número do índice:

//Outra maneira comum de criar arrays é especificar
//o tamanho do array e adicionar elementos posteriormente:


  int myNumber[4];


  myNumber[0] = 25;
  myNumber[1] = 50;
  myNumber[2] = 75;
  myNumber[3] = 100;

  printf("%d\n", myNumbers[3]);



//-------------------------------------------------------------------------------------------------------
  /*Modificar Strings

    Para alterar o valor de um caractere
    específico em uma string, consulte o
    número do índice e use aspas simples :*/

  char greetings[] = "Hello World!";
  greetings[10] = 'J';
  printf("%s\n", greetings);


 //---------------------------------------------------------------------------------------------------

    /*  Diferenças

    A diferença entre as duas formas de criar strings é que o primeiro
    método é mais fácil de escrever e você não precisa incluir o \0caractere,
    pois C fará isso por você.

    Você deve notar que o tamanho de ambos os arrays é o mesmo: Ambos têm 13 caracteres
    (o espaço também conta como caractere), incluindo o \0caractere:*/





   char atencao[] = {'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!', '\0'};
   char atencao2[] = "Hello World!";

  printf("%s\n", atencao);
  printf("%s\n", atencao2);


//---------------------------------------------------------------------------------------------------------------
  /*  A scanf()função recebe dois argumentos: o especificador
    de formato da variável ( "%d" no exemplo abaixo) e o operador
    de referência ( &vari), que armazena o endereço de memória
     da variável.*/

  int vari;


  printf("digit esua idade e aperte enter: \n");



  scanf("%d", &vari);


  printf("esse eh seu idade: %d\n", vari);

  //-*-----------------------------------------------------------------------------------------------



  char nome[30];


  printf("qual eh seu nome?: \n");


  scanf("%s,", &nome);


  printf("Hello %s,\t%i anos\n.", nome, vari);

/*OBSERVE QUE VOCÊ DEVE ESPECIFICAR O TAMANHO DA STRING ARREY(USAMOS UM
UM NÚMERO MUITO ALTO, 30 MAS PELO MENOS TEMOS CETEZA  DE QUE AMAZENARÁ
CARACTERES SUFICIENTES PARA IO PRIMEIRO NOME E VOCÊ NÃO PRECISA ESPESICICAR
O OPERADOR DE REFERÊRNCIA ( $)AO TRANALHAR COM STRINGS EM SCANF().

   */
  //---------------------------------------------------------------------------------------------------------------

  //TRABALHANDO COM PONTEIROS!!!!!
  // ANALIZE O EXEMPLO ABAIXO:

    int myAge = 43;
  int* ptr = &myAge;

  printf("%d\n", myAge);

  printf("%p\n", &myAge);

  printf("%p\n", ptr);


  //EXEMPLO 2 ABAIXO


  int main2();
  int myAge2 = 43;  // VARIAVEL DECLARAÇÃO
  int* ptr2 = &myAge2;  // PONTEIRO DECLARÇÃO

  // Reference: Output the memory address of myAge with the pointer (0x7ffe5367e044)
  printf("%p\n", ptr2);

  // Dereference: Output the value of myAge with the pointer (43)
  printf("%d\n", *ptr2);


    char vetor[150] = "carlos carlos carlos carlos carlos carlo scarlos carlos carlos carloscarlos carlos";
    for(int i = 0;i < sizeof(vetor);i++){
       printf("%c",vetor[i]);
    }

  /*[1]= 9.55;
    [2]= 8.88;
    [3]= 7.44;
   [4]= 10;

    for(int i = 0;i < 5;i++){
        printf("%f\n",vetor[i]);
    }*/





}




























