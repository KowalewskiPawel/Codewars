export function meeting(s: string): string {
  const separatedPeople: string[] = s
    .split(";")
    .map((person: string) => {
      const [name, surname] = person.split(":");
      return `(${surname.toUpperCase()}, ${name.toUpperCase()})`;
    })
    .sort((personA, personB) => {
      const [personsAsurname, personsAname] = personA.split(", ");
      const [personsBsurname, personsBname] = personB.split(", ");
      if (personsAsurname === personsBsurname) {
        return personsAname.localeCompare(personsBname);
      }
      return personsAsurname
        .substring(1)
        .localeCompare(personsBsurname.substring(1));
    });
  return separatedPeople.join("");
}
