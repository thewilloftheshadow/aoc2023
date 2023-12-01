use regex::Regex;

pub fn process_part1(input: &String) -> u32 {
    let re = Regex::new(r"[A-Za-z]").unwrap();
    let filtered = re.replace_all(input, "");
    let split = filtered.split("\n");
    let mapped = split
        .map(|s| {
            let first = s.chars().nth(0).unwrap();
            let last = s.chars().last().unwrap();
            let joined = format!("{first}{last}");
            return joined;
        })
        .map(|s| {
            return s.parse::<u32>().unwrap();
        });
    return mapped.sum();
}

pub fn process_part2(input: &String) -> u32 {
    let converted_word_numbers = 
    println!("{}", converted_word_numbers);
    let re = Regex::new(r"[A-Za-z]").unwrap();
    let filtered = re.replace_all(&converted_word_numbers, "");
    let split = filtered.split("\n");
    let mapped = split
        .map(|s| {
            let first = s.chars().nth(0).unwrap();
            let last = s.chars().last().unwrap();
            let joined = format!("{first}{last}");
            return joined;
        })
        .map(|s| {
            return s.parse::<u32>().unwrap();
        });
    return mapped.sum();
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::fs;

    #[test]
    fn it_works() {
        let example_input = fs::read_to_string("./example.txt").unwrap();
        let example_input2 = fs::read_to_string("./example2.txt").unwrap();

        let part1_result = process_part1(&example_input);
        let part2_result = process_part2(&example_input2);

        assert_eq!(part1_result, 142);
        assert_eq!(part2_result, 281);
    }
}
