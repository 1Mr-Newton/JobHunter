import json
import random
from PIL import Image, ImageDraw, ImageFont
from faker import Faker
from faker.providers import internet

fake = Faker()


def generate_fake_user():
    name = fake.name()
    email = fake.email()
    address = fake.address()
    phone = fake.phone_number()
    job_title = fake.job()

    user_info = {
        "name": name,
        "email": email,
        "address": address,
        "phone": phone,
        "job_title": job_title,
    }

    return user_info


def generate_fake_bank():
    bank_name = fake.company()
    account_number = fake.bban()
    routing_number = fake.routing_number()
    swift_code = fake.swift()
    iban = fake.iban()

    bank_info = {
        "bank_name": bank_name,
        "account_number": account_number,
        "routing_number": routing_number,
        "swift_code": swift_code,
        "iban": iban,
    }

    return bank_info


def generate_stanbic_account_number():
    branch_code = str(random.randint(10, 99))
    account_number = str(random.randint(1000000000, 9999999999))
    account_number = account_number[:7] + "-" + account_number[7:]
    return branch_code + "/" + account_number


# Generate a fake Stanbic Bank account number
account_number = generate_stanbic_account_number()
print(account_number)


def create_placeholder_image(width, height):
    text = f"{width} x {height}"
    # Create a blank white image
    image = Image.new("RGB", (width, height), "#e4e4e4")
    draw = ImageDraw.Draw(image)

    # Add optional text to the image
    if text:
        # Determine the font size based on the image dimensions
        font_size = min(width, height) // 5
        font = ImageFont.truetype("arial.ttf", font_size)

        # Calculate the text bounding box
        text_bbox = draw.textbbox((0, 0), text, font=font)

        # Calculate the text position at the center of the image
        text_position = ((width - text_bbox[2]) // 2, (height - text_bbox[3]) // 2)

        # Draw the text on the image
        draw.text(text_position, text, font=font, fill="black")

    return image


def create_job_data(length):
    job_types = [
        "Software Engineer",
        "Data Scientist",
        "Product Manager",
        "Marketing Specialist",
        "Graphic Designer",
        "Sales Representative",
        "Financial Analyst",
        "Human Resources Manager",
        "Operations Coordinator",
        "Customer Support Specialist",
        "Business Development Executive",
        "Content Writer",
        "UX/UI Designer",
        "Quality Assurance Engineer",
        "Project Manager",
        "Accountant",
        "Research Analyst",
        "Administrative Assistant",
        "Network Engineer",
        "Legal Counsel",
        "Web Developer",
        "Digital Marketing Manager",
        "Database Administrator",
        "Systems Analyst",
        "IT Consultant",
        "Mobile App Developer",
        "Social Media Manager",
        "Data Analyst",
        "Supply Chain Analyst",
        "Event Planner",
        "Public Relations Manager",
        "Technical Writer",
        "Operations Manager",
        "Financial Planner",
        "Software Architect",
        "UI/UX Designer",
        "E-commerce Manager",
        "Business Analyst",
        "Market Research Analyst",
        "Copywriter",
        "Cybersecurity Analyst",
        "Product Owner",
        "IT Project Manager",
        "Data Engineer",
        "HR Generalist",
        "Sales Manager",
        "Front-end Developer",
        "Digital Strategist",
        "UX Researcher",
        "Business Intelligence Analyst",
        "DevOps Engineer",
    ]

    job_descriptions = [
        "Experienced professional with a strong background in {job_type}.",
        "Skilled {job_type} with expertise in problem-solving and collaboration.",
        "Innovative {job_type} with a proven track record of success.",
        "Detail-oriented {job_type} with excellent organizational skills.",
        "Analytical {job_type} with a passion for data-driven decision making.",
        "Creative {job_type} with a keen eye for design and aesthetics.",
        "Results-driven {job_type} with a focus on achieving targets.",
        "Adaptable {job_type} who thrives in a fast-paced environment.",
        "Strategic {job_type} with a deep understanding of market trends.",
        "Motivated {job_type} with strong communication and leadership skills.",
        "Technical {job_type} with proficiency in multiple programming languages.",
        "Customer-focused {job_type} dedicated to delivering exceptional service.",
        "Collaborative {job_type} experienced in cross-functional teamwork.",
        "Expert {job_type} with a strong ability to analyze complex problems.",
        "Skilled {job_type} experienced in managing large-scale projects.",
        "Organized {job_type} with a systematic approach to tasks and deadlines.",
        "Results-oriented {job_type} with a track record of exceeding targets.",
        "Knowledgeable {job_type} with expertise in financial analysis.",
        "Resourceful {job_type} skilled in finding innovative solutions.",
        "Proactive {job_type} with a strong attention to detail.",
        "Team-oriented {job_type} with excellent interpersonal skills.",
        "Passionate {job_type} with a drive for continuous learning.",
        "Adaptive {job_type} with the ability to quickly embrace new technologies.",
        "Strategic thinker with a focus on {job_type} planning and execution.",
        "Experienced {job_type} with a strong background in data analysis.",
        "Detail-oriented {job_type} with a knack for problem-solving.",
        "Motivated {job_type} with a passion for customer satisfaction.",
        "Skilled {job_type} with expertise in digital marketing strategies.",
        "Creative {job_type} with a flair for visual design.",
        "Innovative {job_type} with a talent for product ideation.",
        "Analytical {job_type} with a data-driven approach to decision making.",
        "Collaborative {job_type} with excellent teamwork skills.",
        "Results-oriented {job_type} with a focus on delivering high-quality outcomes.",
        "Proactive {job_type} with the ability to identify and address issues proactively.",
        "Experienced {job_type} with strong project management skills.",
        "Adaptable {job_type} with a proven ability to thrive in changing environments.",
        "Strategic {job_type} with a deep understanding of market dynamics.",
        "Customer-centric {job_type} dedicated to ensuring client satisfaction.",
        "Skilled {job_type} with expertise in web development technologies.",
        "Creative {job_type} with a passion for visual storytelling.",
        "Analytical {job_type} with a strong attention to detail.",
        "Innovative {job_type} with a knack for problem-solving.",
        "Collaborative {job_type} experienced in working with cross-functional teams.",
        "Results-driven {job_type} with a focus on meeting and exceeding goals.",
        "Motivated {job_type} with excellent organizational and time management skills.",
        "Adaptable {job_type} with the ability to thrive in fast-paced environments.",
        "Strategic {job_type} with a data-driven approach to decision making.",
        "Experienced {job_type} with strong interpersonal and communication skills.",
        "Detail-oriented {job_type} with a meticulous approach to work.",
        "Customer-focused {job_type} dedicated to delivering exceptional service experiences.",
    ]

    locations = [
        "San Francisco",
        "New York City",
        "London",
        "Berlin",
        "Toronto",
        "Sydney",
        "Chicago",
        "Seattle",
        "Los Angeles",
        "Paris",
        "Tokyo",
        "Dubai",
        "Mumbai",
        "Singapore",
        "Stockholm",
        "Barcelona",
        "Amsterdam",
        "Hong Kong",
        "Zurich",
        "Dublin",
    ]

    employment_types = ["Full time", "Part time", "Contract", "Freelance"]

    job_listings = []

    for i in range(1, int(length) + 1):
        job_type = random.choice(job_types)
        job_description = random.choice(job_descriptions).format(job_type=job_type)
        job = {
            "id": i,
            "title": job_type,
            "description": job_description,
            "employment_type": random.choice(employment_types),
            "location": random.choice(locations),
        }
        job_listings.append(job)

    # Convert the list of dictionaries to JSON format
    json_data = json.dumps(job_listings, indent=4)

    # Save the JSON data to a file
    with open("job_listings.json", "w") as file:
        file.write(json_data)

    return json_data


# https://chat.openai.com/share/66d7ac09-6268-400a-a4bb-c77db11a27a5
# https://www.figma.com/file/bpAwwvZNSx5JY7fWQYFros/Jobhuntly---Job-Board-%26-Portal-Web-and-Mobile-UI-Kit-(Community)?type=design&node-id=201%3A4123&mode=design&t=2WZ8qvUm7ORdiJ6E-1
# https://www.figma.com/file/wcWvWiaqUttOpmt6qojlPm/Job-UI-Kit-Free-Template-(Community)?type=design&node-id=2%3A56&mode=design&t=gnema1sUd54gkDFO-1
