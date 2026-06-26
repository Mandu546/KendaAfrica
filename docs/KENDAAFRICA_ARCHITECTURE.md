# KENDAAFRICA PROJECT ARCHITECTURE DOCUMENT

---

# 1. PROJECT OVERVIEW

## Project Name

**KendaAfrica**

## Vision

KendaAfrica is a tourism discovery and experience platform designed to help travelers, tourists, residents, and businesses discover destinations, attractions, accommodation, entertainment, transport, emergency services, and experiences across Kenya and eventually Africa.

The platform aims to become the "Booking + Jumia + TripAdvisor + Google Maps" ecosystem for African tourism.

---

# 2. CURRENT TECHNOLOGY STACK

## Frontend (Current)

* React
* Vite
* JavaScript
* Tailwind CSS
* React Router DOM
* React Icons
* Framer Motion
* Swiper JS
* React Helmet Async

---

## Backend (Planned)

* Python
* Django
* Django REST Framework
* Django Admin
* PostgreSQL
* Redis (future)
* Celery (future)
* JWT Authentication
* Cloudinary/AWS S3 (future)

---

## Deployment (Planned)

### Frontend

* Vercel

### Backend

* Railway
* Render
* Digital Ocean
* AWS

---

# 3. DESIGN PRINCIPLES

The KendaAfrica platform follows:

### Minimalistic UI

* clean layouts
* large imagery
* rounded cards
* soft shadows
* tourism-focused experience

---

### Responsive Design

The application must support:

* Desktop
* Tablet
* Mobile

Mobile responsiveness is mandatory.

---

### Dynamic Content

No hardcoded data should exist long-term.

All data must eventually come from APIs.

---

# 4. USER FLOW

## Home Page

User lands on homepage.

Homepage displays:

* Hero section
* Search
* Popular destinations
* Tourist attractions
* Footer

Users scroll horizontally through destinations.

---

## Destination Page

Example:

```text
/places/naivasha
```

Destination pages contain:

* Place navbar
* Search
* Home button
* Back button
* Next destination button
* Settings
* User profile

---

# 5. DESTINATION PAGE STRUCTURE

Each destination contains multiple service rows.

Example:

## Tourist Attractions

Horizontal scrolling cards.

---

## Hotels

Horizontal scrolling cards.

---

## BNBs

Horizontal scrolling cards.

---

## Restaurants

Horizontal scrolling cards.

---

## Nightlife

Horizontal scrolling cards.

---

## Gyms

Horizontal scrolling cards.

---

## Shopping

Horizontal scrolling cards.

---

## Transport

Horizontal scrolling cards.

---

## Hospitals

Horizontal scrolling cards.

---

## Emergency Contacts

Horizontal scrolling cards.

---

# 6. SERVICE SIDEBAR

Destination pages contain a floating sidebar similar to Jumia.

Features:

* fixed position
* searchable
* clickable categories
* auto-scroll to sections
* mobile responsive

Example:

```
Search services

Tourist Attractions
Hotels
BNBs
Restaurants
Nightlife
Gyms
Shopping
Transport
Hospitals
Emergency
```

---

# 7. CURRENT FOLDER STRUCTURE

```
src/

├── assets/
│
├── components/
│   ├── Card.jsx
│   ├── Hero.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── PlaceNavbar.jsx
│   ├── HorizontalSection.jsx
│   ├── SearchBar.jsx
│   ├── ServiceSidebar.jsx
│
├── pages/
│   ├── Home.jsx
│   └── PlaceDetails.jsx
│
├── layouts/
│   └── MainLayout.jsx
│
├── routes/
│   └── AppRoutes.jsx
│
├── hooks/
│
├── utils/
│
├── data/
│   ├── cityOrder.js
│   └── services.js
│
├── App.jsx
├── main.jsx
```

---

# 8. CURRENT IMPLEMENTED FEATURES

Completed:

* React setup
* Vite setup
* Tailwind setup
* Routing
* Homepage
* City cards
* Explore page
* Place navbar
* Back navigation
* Forward navigation
* Home button
* Footer
* Horizontal sections
* Service sidebar
* Sidebar search
* Responsive layout foundation

---

# 9. DATABASE DESIGN (PLANNED)

Tables:

## Users

* id
* username
* email
* role

---

## Cities

* id
* name
* slug
* description
* thumbnail
* hero_image

---

## Services

* id
* city_id
* category
* name
* description
* image

---

## Hotels

* id
* city_id
* name
* description
* price
* rating
* images

---

## Attractions

* id
* city_id
* name
* description
* images

---

## Partners

* id
* business_name
* owner
* verification_status

---

# 10. ADMIN DASHBOARD

Admin dashboard should allow:

* Create city
* Update city
* Delete city
* Upload images
* Change thumbnails
* Add services
* Remove services
* Manage listings
* Manage businesses
* Manage partners

No frontend code changes should be required.

---

# 11. PARTNER PORTAL

Future partners should be able to:

* register
* verify business
* upload images
* add listings
* update listings
* delete listings
* view analytics

---

# 12. FUTURE FEATURES

Planned:

* Authentication
* Booking system
* Payments
* Google Maps
* Reviews
* Ratings
* Favorites
* Notifications
* Chat system
* AI recommendations
* Nearby places
* Events
* Weather
* Transport booking

---

# 13. ROADMAP

### Phase 1

Frontend prototype.

### Phase 2

Destination architecture.

### Phase 3

Django backend.

### Phase 4

REST APIs.

### Phase 5

Admin dashboard.

### Phase 6

Partner dashboard.

### Phase 7

Authentication.

### Phase 8

Booking.

### Phase 9

Payments.

### Phase 10

Production deployment.

---

# 14. CURRENT PROJECT STATUS

Current milestone:

```
Destination Page Architecture
+
Jumia-style Sidebar
+
Horizontal Service Sections
+
Navigation System
```

Status:

```
Frontend Prototype:
approximately 25% complete
```

---

# 15. LONG TERM GOAL

Build Africa's leading tourism discovery ecosystem where:

* tourists discover destinations
* businesses list services
* partners manage listings
* users book experiences
* local economies benefit
* expansion scales from Kenya to all of Africa

```
```
