# CRITICAL FIX — MAP MUST POINT TO THE ACTUAL SOLARARK OFFICE

Fix the **Registered Offices / Map section only**.

The current map is NOT correctly centered on the official SolarARK office location. It is currently showing a nearby/general Amravati location instead of the exact office address.

This is a **data + geolocation correctness issue**, not a visual styling issue.

Do not redesign the map UI.

---

## 1. SINGLE SOURCE OF TRUTH

For every registered office, the **official address stored in the application data must be the source of truth**.

The map marker, map center, info popup and “Get Directions” destination must all use the **same exact office location**.

Do NOT:

- use approximate city coordinates
- use city-centre coordinates
- use manually guessed latitude/longitude
- use a nearby landmark
- use a generic Google search result
- use the previous map viewport as the office position
- hardcode a visually convenient marker location

The marker must represent the actual office.

---

# 2. IMPORTANT — DO NOT GUESS COORDINATES

For each office:

1. Take the official office address already stored in the application.
2. Geocode that exact address using the map/geocoding provider.
3. Store/use the resulting exact coordinates.
4. Use those coordinates for the marker.
5. Center the map on those same coordinates.

If the address cannot be reliably geocoded, **do not invent coordinates**.

Instead, surface the geocoding failure during development and report which office/address could not be resolved.

---

# 3. AMRAVATI HEADQUARTERS

The selected office shown in the current screenshot is:

**Amravati (Headquarters)**

Official address currently displayed:

**Mira Sadan, House No. 27 A, Krushnarpan Colony, Amravati, Maharashtra 444605**

This exact address must be used for:

- geocoding
- marker position
- initial map center
- popup position
- directions destination

Do not use “Amravati” alone.

Do not use city-center coordinates.

Do not use a nearby hospital, college, road, restaurant, or landmark as a proxy.

The marker should physically sit at the geocoded location of:

**Mira Sadan, House No. 27 A, Krushnarpan Colony, Amravati, Maharashtra 444605**

---

# 4. MAP CENTERING

When an office is selected:

```text
selected office
      ↓
official address
      ↓
exact coordinates
      ↓
marker position
      ↓
map center
```

All five must refer to the same physical location.

Do not use:

```text
map center = city
marker = office
```

The map must center on the marker itself.

---

# 5. MARKER POSITION

The visual pin shown on the map must correspond to the exact office coordinates.

The current screenshot shows the marker in a nearby area rather than at the official office.

Fix this.

The marker should sit directly at the geocoded office location.

Do not offset the marker manually for aesthetic reasons.

Do not move it to make the popup look better.

If the popup overlaps the marker, reposition the popup UI independently — **never move the actual geographic marker**.

---

# 6. POPUP / INFO CARD

The information card may be visually offset from the marker for readability.

That is acceptable.

However:

**popup position ≠ marker position**

The popup should visually point toward / correspond to the actual marker.

Never change coordinates merely to make the popup layout easier.

---

# 7. MAP ZOOM

When an office is selected:

- center on exact office coordinates
- use a useful local zoom level
- show enough surrounding context for orientation
- do not zoom so far out that the office becomes ambiguous
- do not zoom so far in that the user loses geographic context

The office marker must remain clearly visible.

Use the same reasonable zoom strategy for all office locations unless a particular location requires a small adjustment.

---

# 8. ALL REGISTERED OFFICES

Apply the same logic to:

- Amravati (Headquarters)
- Chh. Sambhajinagar (Aurangabad)
- Wardha
- Akola

For every office:

```text
Official name
+
Official address
+
Exact latitude
+
Exact longitude
+
Map marker
+
Map center
+
Directions destination
```

must represent the same physical place.

Do not fix only Amravati.

---

# 9. DATA MODEL

Refactor the office data if necessary so each office has one authoritative location object.

Preferred conceptual structure:

```js
{
  name: "...",
  address: "...",
  latitude: ...,
  longitude: ...,
  phone: "...",
  email: "..."
}
```

or an equivalent structure.

Do not duplicate coordinates in multiple components.

The map component should consume the office location data rather than maintaining separate manually-entered coordinates.

---

# 10. DIRECTIONS LINK

The **Get Directions** action must also use the exact selected office address/coordinates.

Do not send users to:

- city centre
- generic business search
- a nearby landmark

The destination must correspond to the same office represented by the marker.

---

# 11. VERIFY THE ACTUAL GEOCODE

Do not stop after changing the marker.

Verify each office independently.

For each one, record:

| Office | Official Address | Latitude | Longitude | Marker Correct? | Map Center Correct? | Directions Correct? |
|---|---|---:|---:|---|---|---|

The coordinates must be based on the actual official address, not approximate city coordinates.

---

# 12. DO NOT CHANGE THE VISUAL DESIGN

Do NOT modify:

- heading
- typography
- office tabs
- map styling
- popup styling
- colours
- section layout
- card design
- map provider
- page structure

This task is strictly about **location correctness and map behavior**.

---

# 13. IMPORTANT DEBUGGING REQUIREMENT

If the application currently stores coordinates manually, inspect where those coordinates came from.

Search for:

```text
lat
lng
latitude
longitude
center
coordinates
position
mapCenter
marker
```

Find the exact data currently responsible for the incorrect marker.

Report:

```text
Current coordinate:
Current source:
Correct coordinate:
Correct source:
```

Do not silently replace values without explaining the source.

---

# 14. PRODUCTION VERIFICATION

Test every office at:

- desktop
- tablet
- mobile

For each office:

1. Select office.
2. Confirm marker moves to exact office.
3. Confirm map centers on exact office.
4. Confirm popup represents that office.
5. Confirm address matches marker.
6. Confirm Get Directions destination matches.
7. Change to another office.
8. Confirm previous marker/center does not remain incorrectly.

---

# FINAL SUCCESS CRITERION

For every selected office, the following must all point to the **same physical location**:

**Address → Coordinates → Marker → Map Center → Popup → Directions**

The current issue is that these are not reliably aligned.

Fix the underlying geolocation/data source rather than visually moving the marker.

Do not claim success until the actual geographic coordinates have been verified against the official office address.