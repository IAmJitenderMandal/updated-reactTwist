import React from "react";
import "./editAddresspage.styles.scss";

export default function EditAddress() {
  return (
    <div className="edit-address">
      <form>
        <div className="inline-elements-container">
          <div className="form-element-group">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              className="first-name"
              placeholder="First Name"
            />
          </div>
          <div className="form-element-group">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" className="last-name" placeholder="Last Name" />
          </div>
        </div>
        <div className="form-element-group">
          <label htmlFor="last-name">Address</label>
          <input type="text" className="address" placeholder="Address" />
        </div>
        <div className="form-element-group">
          <label htmlFor="last-name">Appartment(optional)</label>
          <input
            type="text"
            className="last-name"
            placeholder="Appartment, suit, etc(optional)"
          />
        </div>

        <div className="inline-elements-container drop-downs">
          <select name="city">
            <option value="abu-dhabhi" defaultValue>
              Choose your City
            </option>
            <option value="abu-dhabhi">Abu Dhabi</option>
            <option value="ajman">Ajman</option>
            <option value="al-ain">Al Ain</option>
            <option value="dubai">Dubai</option>
            <option value="fujairah">Fujairah</option>
            <option value="ras-al-khaiman">Ras al-Khaimah</option>
            <option value="sharjah">Sharjah</option>
            <option value="umm-al-quwain">Umm al-Quwain</option>
          </select>
          <select name="Country">
            <option value="uae">UAE</option>
          </select>
          <select name="Country">
            <option value="">Choose Your Province</option>
            <option value="abu-dhabi">Abu Dhabi</option>
            <option value="ajman">Ajman</option>
            <option value="dubai">Dubai</option>
            <option value="fujairah">Fujairah</option>
            <option value="ras-al-khaimah">Ras al-khaimah</option>
            <option value="sharjah">Sharjah</option>
            <option value="umm-al-quwain">Umm al-Quwain </option>
          </select>
        </div>

        <div className="form-element-group">
          <label htmlFor="phone">Phone</label>
          <input type="number" className="phone" placeholder="Your Phone" />
        </div>
        <div className="form-element-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="email" placeholder="Your Email" />
        </div>
        <div className="form-element-group">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
