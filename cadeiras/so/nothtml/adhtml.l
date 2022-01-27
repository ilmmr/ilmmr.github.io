%{
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <math.h>
%}
%option noyywrap  yylineno

%%
\<td[^\n]+\n       {ECHO;FILE *fh = fopen("output.txt","r");
                                    char str[1024];
                                    while(fgets(str, 1024, fh) != NULL){
                                      char* campos[5];
                                      char* s = strtok(str, "\n");
                                      int i=0;  char* token = strtok(s, " ");
                                       while(token)
                                       {
                                          campos[i] = token;
                                          token = strtok(NULL, " ");
                                          i++;
                                       }
                                       if(strstr(campos[4],".html")==NULL && strcmp(campos[4],"comp.sh")!=0)//&& strcmp(campos[4],"of")!=0 && strcmp(campos[4],"adhtml")!=0 && strcmp(campos[4],"comp.sh")!=0)
                                        printf("          <tr><td valign='top'><img src='../../icons/unknown.gif' alt='[DIR]'></td><td><a href='%s'>%s</a></td><td align='right'>%s %s %s</td><td align='right'>%s</td><td>&nbsp;</td></tr>\n",campos[4],campos[4],campos[1],campos[2],campos[3],campos[0]);
                                    }}
.|\n                             {ECHO;}
%%
int main()
{
  yylex();
  return 0;
}

void addhtml() {
  FILE *fh = fopen("output.txt","r");
  char str[1024];
  while(fgets(str, 1024, fh) != NULL){
    char* campos[5];
    int i=0;  char* token = strtok(str, " ");
    while(token)
    {
        campos[i] = token;
        token = strtok(NULL, " ");
        i++;
    }
    printf("<tr><td valign='top'><img src='../../icons/unknown.gif' alt='[DIR]'></td><td><a href='%s'>%s</a></td><td align='right'>%s %s %s</td><td align='right'>%s</td><td>&nbsp;</td></tr>",campos[4],campos[4],campos[1],campos[2],campos[3],campos[0]);
  }
}


