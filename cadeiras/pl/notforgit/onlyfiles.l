%{
#include <math.h>
#include <stdio.h>
#include <string.h>
%}
%option noyywrap  yylineno
%x FL USERFL

Abrev ER

%%
^\-rw[^ ]*[  ]       {BEGIN FL;}

<FL>{
  users     {BEGIN USERFL;}
  .         {;}
}
<USERFL>{
  [^\n]+        {printf("%s\n", yytext);}
  \n            {BEGIN INITIAL;}
}

.|\n                      {;}

%%
int main()
{
  yylex();
  return 0;
}

