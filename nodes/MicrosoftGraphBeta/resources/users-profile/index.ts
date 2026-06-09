import type { INodeProperties } from 'n8n-workflow';

export const usersProfileDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					]
				}
			},
			"options": [
				{
					"name": "Users Delete Profile",
					"value": "Users Delete Profile",
					"action": "Delete profile",
					"description": "Deletes a profile object from a user's account.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile"
						}
					}
				},
				{
					"name": "Users Get Profile",
					"value": "Users Get Profile",
					"action": "Get profile",
					"description": "Retrieve the properties and relationships of a profile object for a given user. The **profile** resource exposes various rich properties that are descriptive of the user as relationships, for example, anniversaries and education activities. To get one of these navigation properties, use the corresponding GET method on that property. See the methods exposed by **profile**.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile"
						}
					}
				},
				{
					"name": "Users Update Profile",
					"value": "Users Update Profile",
					"action": "Update the navigation property profile in users",
					"description": "Update the navigation property profile in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile"
						}
					}
				},
				{
					"name": "Users Profile List Account",
					"value": "Users Profile List Account",
					"action": "List accounts",
					"description": "Retrieves properties related to the user's accounts from the profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/account"
						}
					}
				},
				{
					"name": "Users Profile Create Account",
					"value": "Users Profile Create Account",
					"action": "Create account",
					"description": "Create a new userAccountInformation object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/account"
						}
					}
				},
				{
					"name": "Users Profile Delete Account",
					"value": "Users Profile Delete Account",
					"action": "Delete navigation property account for users",
					"description": "Delete navigation property account for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/account/{{$parameter[\"userAccountInformation-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Get Account",
					"value": "Users Profile Get Account",
					"action": "Get account from users",
					"description": "Get account from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/account/{{$parameter[\"userAccountInformation-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Update Account",
					"value": "Users Profile Update Account",
					"action": "Update the navigation property account in users",
					"description": "Update the navigation property account in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/account/{{$parameter[\"userAccountInformation-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile List Addresses",
					"value": "Users Profile List Addresses",
					"action": "List addresses",
					"description": "Get the itemAddress resources from the **addresses** navigation property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/addresses"
						}
					}
				},
				{
					"name": "Users Profile Create Addresses",
					"value": "Users Profile Create Addresses",
					"action": "Create addresses",
					"description": "Create a new itemAddress object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/addresses"
						}
					}
				},
				{
					"name": "Users Profile Delete Addresses",
					"value": "Users Profile Delete Addresses",
					"action": "Delete navigation property addresses for users",
					"description": "Delete navigation property addresses for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/addresses/{{$parameter[\"itemAddress-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Get Addresses",
					"value": "Users Profile Get Addresses",
					"action": "Get addresses from users",
					"description": "Represents details of addresses associated with the user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/addresses/{{$parameter[\"itemAddress-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Update Addresses",
					"value": "Users Profile Update Addresses",
					"action": "Update the navigation property addresses in users",
					"description": "Update the navigation property addresses in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/addresses/{{$parameter[\"itemAddress-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile List Anniversaries",
					"value": "Users Profile List Anniversaries",
					"action": "List anniversaries",
					"description": "Retrieve a list of personAnniversary objects for the given user from their profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/anniversaries"
						}
					}
				},
				{
					"name": "Users Profile Create Anniversaries",
					"value": "Users Profile Create Anniversaries",
					"action": "Create personAnniversary",
					"description": "Use this API to create a new personAnniversary object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/anniversaries"
						}
					}
				},
				{
					"name": "Users Profile Delete Anniversaries",
					"value": "Users Profile Delete Anniversaries",
					"action": "Delete navigation property anniversaries for users",
					"description": "Delete navigation property anniversaries for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/anniversaries/{{$parameter[\"personAnnualEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Get Anniversaries",
					"value": "Users Profile Get Anniversaries",
					"action": "Get anniversaries from users",
					"description": "Represents the details of meaningful dates associated with a person.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/anniversaries/{{$parameter[\"personAnnualEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Update Anniversaries",
					"value": "Users Profile Update Anniversaries",
					"action": "Update the navigation property anniversaries in users",
					"description": "Update the navigation property anniversaries in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/anniversaries/{{$parameter[\"personAnnualEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile List Awards",
					"value": "Users Profile List Awards",
					"action": "List awards",
					"description": "Retrieve a list of personAward objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/awards"
						}
					}
				},
				{
					"name": "Users Profile Create Awards",
					"value": "Users Profile Create Awards",
					"action": "Create personAward",
					"description": "Create a new personAward object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/awards"
						}
					}
				},
				{
					"name": "Users Profile Delete Awards",
					"value": "Users Profile Delete Awards",
					"action": "Delete navigation property awards for users",
					"description": "Delete navigation property awards for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/awards/{{$parameter[\"personAward-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Get Awards",
					"value": "Users Profile Get Awards",
					"action": "Get awards from users",
					"description": "Represents the details of awards or honors associated with a person.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/awards/{{$parameter[\"personAward-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Update Awards",
					"value": "Users Profile Update Awards",
					"action": "Update the navigation property awards in users",
					"description": "Update the navigation property awards in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/awards/{{$parameter[\"personAward-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile List Certifications",
					"value": "Users Profile List Certifications",
					"action": "List certifications",
					"description": "Retrieve a list of personCertification objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/certifications"
						}
					}
				},
				{
					"name": "Users Profile Create Certifications",
					"value": "Users Profile Create Certifications",
					"action": "Create personCertification",
					"description": "Create a new personCertification object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/certifications"
						}
					}
				},
				{
					"name": "Users Profile Delete Certifications",
					"value": "Users Profile Delete Certifications",
					"action": "Delete navigation property certifications for users",
					"description": "Delete navigation property certifications for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/certifications/{{$parameter[\"personCertification-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Get Certifications",
					"value": "Users Profile Get Certifications",
					"action": "Get certifications from users",
					"description": "Represents the details of certifications associated with a person.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/certifications/{{$parameter[\"personCertification-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Update Certifications",
					"value": "Users Profile Update Certifications",
					"action": "Update the navigation property certifications in users",
					"description": "Update the navigation property certifications in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/certifications/{{$parameter[\"personCertification-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile List Educational Activities",
					"value": "Users Profile List Educational Activities",
					"action": "List educationalActivities",
					"description": "Retrieve a list of educationalActivity objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/educationalActivities"
						}
					}
				},
				{
					"name": "Users Profile Create Educational Activities",
					"value": "Users Profile Create Educational Activities",
					"action": "Create educationalActivity",
					"description": "Create a new educationalActivity in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/educationalActivities"
						}
					}
				},
				{
					"name": "Users Profile Delete Educational Activities",
					"value": "Users Profile Delete Educational Activities",
					"action": "Delete navigation property educationalActivities for users",
					"description": "Delete navigation property educationalActivities for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/educationalActivities/{{$parameter[\"educationalActivity-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Get Educational Activities",
					"value": "Users Profile Get Educational Activities",
					"action": "Get educationalActivities from users",
					"description": "Represents data that a user has supplied related to undergraduate, graduate, postgraduate or other educational activities.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/educationalActivities/{{$parameter[\"educationalActivity-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Update Educational Activities",
					"value": "Users Profile Update Educational Activities",
					"action": "Update the navigation property educationalActivities in users",
					"description": "Update the navigation property educationalActivities in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/educationalActivities/{{$parameter[\"educationalActivity-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile List Emails",
					"value": "Users Profile List Emails",
					"action": "List emails",
					"description": "Retrieve a list of itemEmail objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/emails"
						}
					}
				},
				{
					"name": "Users Profile Create Emails",
					"value": "Users Profile Create Emails",
					"action": "Create itemEmail",
					"description": "Create a new itemEmail object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/emails"
						}
					}
				},
				{
					"name": "Users Profile Delete Emails",
					"value": "Users Profile Delete Emails",
					"action": "Delete navigation property emails for users",
					"description": "Delete navigation property emails for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/emails/{{$parameter[\"itemEmail-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Get Emails",
					"value": "Users Profile Get Emails",
					"action": "Get emails from users",
					"description": "Represents detailed information about email addresses associated with the user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/emails/{{$parameter[\"itemEmail-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Update Emails",
					"value": "Users Profile Update Emails",
					"action": "Update the navigation property emails in users",
					"description": "Update the navigation property emails in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/emails/{{$parameter[\"itemEmail-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile List Interests",
					"value": "Users Profile List Interests",
					"action": "List interests",
					"description": "Retrieve a list of personInterest objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/interests"
						}
					}
				},
				{
					"name": "Users Profile Create Interests",
					"value": "Users Profile Create Interests",
					"action": "Create personInterest",
					"description": "Create a new personInterest.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/interests"
						}
					}
				},
				{
					"name": "Users Profile Delete Interests",
					"value": "Users Profile Delete Interests",
					"action": "Delete navigation property interests for users",
					"description": "Delete navigation property interests for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/interests/{{$parameter[\"personInterest-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Get Interests",
					"value": "Users Profile Get Interests",
					"action": "Get interests from users",
					"description": "Provides detailed information about interests the user has associated with themselves in various services.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/interests/{{$parameter[\"personInterest-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Update Interests",
					"value": "Users Profile Update Interests",
					"action": "Update the navigation property interests in users",
					"description": "Update the navigation property interests in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/interests/{{$parameter[\"personInterest-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile List Languages",
					"value": "Users Profile List Languages",
					"action": "List languages",
					"description": "Retrieve a list of languageProficiency objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/languages"
						}
					}
				},
				{
					"name": "Users Profile Create Languages",
					"value": "Users Profile Create Languages",
					"action": "Create languageProficiency",
					"description": "Use this API to create a new languageProficiency object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/languages"
						}
					}
				},
				{
					"name": "Users Profile Delete Languages",
					"value": "Users Profile Delete Languages",
					"action": "Delete navigation property languages for users",
					"description": "Delete navigation property languages for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/languages/{{$parameter[\"languageProficiency-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Get Languages",
					"value": "Users Profile Get Languages",
					"action": "Get languages from users",
					"description": "Represents detailed information about languages that a user has added to their profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/languages/{{$parameter[\"languageProficiency-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Update Languages",
					"value": "Users Profile Update Languages",
					"action": "Update the navigation property languages in users",
					"description": "Update the navigation property languages in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/languages/{{$parameter[\"languageProficiency-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile List Names",
					"value": "Users Profile List Names",
					"action": "List names",
					"description": "Retrieve a list of personName objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/names"
						}
					}
				},
				{
					"name": "Users Profile Create Names",
					"value": "Users Profile Create Names",
					"action": "Create personName",
					"description": "Use this API to create a new personName object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/names"
						}
					}
				},
				{
					"name": "Users Profile Delete Names",
					"value": "Users Profile Delete Names",
					"action": "Delete navigation property names for users",
					"description": "Delete navigation property names for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/names/{{$parameter[\"personName-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Get Names",
					"value": "Users Profile Get Names",
					"action": "Get names from users",
					"description": "Represents the names a user has added to their profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/names/{{$parameter[\"personName-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Update Names",
					"value": "Users Profile Update Names",
					"action": "Update the navigation property names in users",
					"description": "Update the navigation property names in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/names/{{$parameter[\"personName-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile List Notes",
					"value": "Users Profile List Notes",
					"action": "List notes",
					"description": "Retrieve a list of personAnnotation objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/notes"
						}
					}
				},
				{
					"name": "Users Profile Create Notes",
					"value": "Users Profile Create Notes",
					"action": "Create personAnnotation",
					"description": "Create a new personAnnotation object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/notes"
						}
					}
				},
				{
					"name": "Users Profile Delete Notes",
					"value": "Users Profile Delete Notes",
					"action": "Delete navigation property notes for users",
					"description": "Delete navigation property notes for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/notes/{{$parameter[\"personAnnotation-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Get Notes",
					"value": "Users Profile Get Notes",
					"action": "Get notes from users",
					"description": "Represents notes that a user has added to their profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/notes/{{$parameter[\"personAnnotation-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Update Notes",
					"value": "Users Profile Update Notes",
					"action": "Update the navigation property notes in users",
					"description": "Update the navigation property notes in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/notes/{{$parameter[\"personAnnotation-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile List Patents",
					"value": "Users Profile List Patents",
					"action": "List patents",
					"description": "Retrieve a list of itemPatent objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/patents"
						}
					}
				},
				{
					"name": "Users Profile Create Patents",
					"value": "Users Profile Create Patents",
					"action": "Create itemPatent",
					"description": "Create a new itemPatent object within a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/patents"
						}
					}
				},
				{
					"name": "Users Profile Delete Patents",
					"value": "Users Profile Delete Patents",
					"action": "Delete navigation property patents for users",
					"description": "Delete navigation property patents for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/patents/{{$parameter[\"itemPatent-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Get Patents",
					"value": "Users Profile Get Patents",
					"action": "Get patents from users",
					"description": "Represents patents that a user has added to their profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/patents/{{$parameter[\"itemPatent-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Update Patents",
					"value": "Users Profile Update Patents",
					"action": "Update the navigation property patents in users",
					"description": "Update the navigation property patents in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/patents/{{$parameter[\"itemPatent-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile List Phones",
					"value": "Users Profile List Phones",
					"action": "List phones",
					"description": "Retrieve a list of itemPhone objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/phones"
						}
					}
				},
				{
					"name": "Users Profile Create Phones",
					"value": "Users Profile Create Phones",
					"action": "Create itemPhoneNumber",
					"description": "Use this API to create a new itemPhone object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/phones"
						}
					}
				},
				{
					"name": "Users Profile Delete Phones",
					"value": "Users Profile Delete Phones",
					"action": "Delete navigation property phones for users",
					"description": "Delete navigation property phones for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/phones/{{$parameter[\"itemPhone-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Get Phones",
					"value": "Users Profile Get Phones",
					"action": "Get phones from users",
					"description": "Represents detailed information about phone numbers associated with a user in various services.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/phones/{{$parameter[\"itemPhone-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Update Phones",
					"value": "Users Profile Update Phones",
					"action": "Update the navigation property phones in users",
					"description": "Update the navigation property phones in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/phones/{{$parameter[\"itemPhone-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile List Positions",
					"value": "Users Profile List Positions",
					"action": "List positions",
					"description": "Retrieve a list of workPosition objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/positions"
						}
					}
				},
				{
					"name": "Users Profile Create Positions",
					"value": "Users Profile Create Positions",
					"action": "Create workPosition",
					"description": "Use this API to create a new workPosition in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/positions"
						}
					}
				},
				{
					"name": "Users Profile Delete Positions",
					"value": "Users Profile Delete Positions",
					"action": "Delete navigation property positions for users",
					"description": "Delete navigation property positions for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/positions/{{$parameter[\"workPosition-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Get Positions",
					"value": "Users Profile Get Positions",
					"action": "Get positions from users",
					"description": "Represents detailed information about work positions associated with a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/positions/{{$parameter[\"workPosition-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Update Positions",
					"value": "Users Profile Update Positions",
					"action": "Update the navigation property positions in users",
					"description": "Update the navigation property positions in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/positions/{{$parameter[\"workPosition-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile List Projects",
					"value": "Users Profile List Projects",
					"action": "List projects",
					"description": "Retrieve a list of projectParticipation objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/projects"
						}
					}
				},
				{
					"name": "Users Profile Create Projects",
					"value": "Users Profile Create Projects",
					"action": "Create projectParticipation",
					"description": "Use this API to create a new projectParticipation object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/projects"
						}
					}
				},
				{
					"name": "Users Profile Delete Projects",
					"value": "Users Profile Delete Projects",
					"action": "Delete navigation property projects for users",
					"description": "Delete navigation property projects for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/projects/{{$parameter[\"projectParticipation-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Get Projects",
					"value": "Users Profile Get Projects",
					"action": "Get projects from users",
					"description": "Represents detailed information about projects associated with a user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/projects/{{$parameter[\"projectParticipation-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Update Projects",
					"value": "Users Profile Update Projects",
					"action": "Update the navigation property projects in users",
					"description": "Update the navigation property projects in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/projects/{{$parameter[\"projectParticipation-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile List Publications",
					"value": "Users Profile List Publications",
					"action": "List publications",
					"description": "Retrieve a list of itemPublication objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/publications"
						}
					}
				},
				{
					"name": "Users Profile Create Publications",
					"value": "Users Profile Create Publications",
					"action": "Create itemPublication",
					"description": "Create a new itemPublication object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/publications"
						}
					}
				},
				{
					"name": "Users Profile Delete Publications",
					"value": "Users Profile Delete Publications",
					"action": "Delete navigation property publications for users",
					"description": "Delete navigation property publications for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/publications/{{$parameter[\"itemPublication-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Get Publications",
					"value": "Users Profile Get Publications",
					"action": "Get publications from users",
					"description": "Represents details of any publications a user has added to their profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/publications/{{$parameter[\"itemPublication-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Update Publications",
					"value": "Users Profile Update Publications",
					"action": "Update the navigation property publications in users",
					"description": "Update the navigation property publications in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/publications/{{$parameter[\"itemPublication-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile List Skills",
					"value": "Users Profile List Skills",
					"action": "List skills",
					"description": "Retrieve a list of skillProficiency objects in a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/skills"
						}
					}
				},
				{
					"name": "Users Profile Create Skills",
					"value": "Users Profile Create Skills",
					"action": "Create skillProficiency",
					"description": "Use this API to create a new skillProficiency object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/skills"
						}
					}
				},
				{
					"name": "Users Profile Delete Skills",
					"value": "Users Profile Delete Skills",
					"action": "Delete navigation property skills for users",
					"description": "Delete navigation property skills for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/skills/{{$parameter[\"skillProficiency-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Get Skills",
					"value": "Users Profile Get Skills",
					"action": "Get skills from users",
					"description": "Represents detailed information about skills associated with a user in various services.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/skills/{{$parameter[\"skillProficiency-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Update Skills",
					"value": "Users Profile Update Skills",
					"action": "Update the navigation property skills in users",
					"description": "Update the navigation property skills in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/skills/{{$parameter[\"skillProficiency-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile List Web Accounts",
					"value": "Users Profile List Web Accounts",
					"action": "List webAccounts",
					"description": "Retrieve a list of webAccounts objects from the user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/webAccounts"
						}
					}
				},
				{
					"name": "Users Profile Create Web Accounts",
					"value": "Users Profile Create Web Accounts",
					"action": "Create webAccount",
					"description": "Create a new webAccount object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/webAccounts"
						}
					}
				},
				{
					"name": "Users Profile Delete Web Accounts",
					"value": "Users Profile Delete Web Accounts",
					"action": "Delete navigation property webAccounts for users",
					"description": "Delete navigation property webAccounts for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/webAccounts/{{$parameter[\"webAccount-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Get Web Accounts",
					"value": "Users Profile Get Web Accounts",
					"action": "Get webAccounts from users",
					"description": "Represents web accounts the user has indicated they use or has added to their user profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/webAccounts/{{$parameter[\"webAccount-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Update Web Accounts",
					"value": "Users Profile Update Web Accounts",
					"action": "Update the navigation property webAccounts in users",
					"description": "Update the navigation property webAccounts in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/webAccounts/{{$parameter[\"webAccount-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile List Websites",
					"value": "Users Profile List Websites",
					"action": "List websites",
					"description": "Retrieve a list of personWebsite objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/websites"
						}
					}
				},
				{
					"name": "Users Profile Create Websites",
					"value": "Users Profile Create Websites",
					"action": "Create personWebsite",
					"description": "Create a new personWebsite object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/websites"
						}
					}
				},
				{
					"name": "Users Profile Delete Websites",
					"value": "Users Profile Delete Websites",
					"action": "Delete navigation property websites for users",
					"description": "Delete navigation property websites for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/websites/{{$parameter[\"personWebsite-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Get Websites",
					"value": "Users Profile Get Websites",
					"action": "Get websites from users",
					"description": "Represents detailed information about websites associated with a user in various services.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/websites/{{$parameter[\"personWebsite-id\"]}}"
						}
					}
				},
				{
					"name": "Users Profile Update Websites",
					"value": "Users Profile Update Websites",
					"action": "Update the navigation property websites in users",
					"description": "Update the navigation property websites in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/profile/websites/{{$parameter[\"personWebsite-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /users/{user-id}/profile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Delete Profile"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Delete Profile"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Get Profile"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Get Profile"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Get Profile"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Update Profile"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Update Profile"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Account"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Account"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Account"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Account"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Account"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Account"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Account"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Account"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Account"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Account"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/account<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Account"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/profile/account/{userAccountInformation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Account"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Account"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/account/{userAccountInformation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Account"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Account"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Account"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/account/{userAccountInformation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Account"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/account/{userAccountInformation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Account"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/addresses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Addresses"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Addresses"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Addresses"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Addresses"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Addresses"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Addresses"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Addresses"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Addresses"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Addresses"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/addresses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Addresses"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/addresses<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Addresses"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/profile/addresses/{itemAddress-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Addresses"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Addresses"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/addresses/{itemAddress-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Addresses"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Addresses"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Addresses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/addresses/{itemAddress-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Addresses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/addresses/{itemAddress-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Addresses"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/anniversaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Anniversaries"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Anniversaries"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Anniversaries"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Anniversaries"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Anniversaries"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Anniversaries"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Anniversaries"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Anniversaries"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Anniversaries"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/anniversaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Anniversaries"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/anniversaries<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Anniversaries"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Anniversaries"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Anniversaries"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Anniversaries"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Anniversaries"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Anniversaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Anniversaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Anniversaries"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/awards",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Awards"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Awards"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Awards"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Awards"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Awards"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Awards"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Awards"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Awards"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Awards"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/awards",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Awards"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/awards<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Awards"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/profile/awards/{personAward-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Awards"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Awards"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/awards/{personAward-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Awards"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Awards"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Awards"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/awards/{personAward-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Awards"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/awards/{personAward-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Awards"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/certifications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Certifications"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Certifications"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Certifications"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Certifications"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Certifications"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Certifications"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Certifications"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Certifications"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Certifications"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/certifications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Certifications"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/certifications<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Certifications"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/profile/certifications/{personCertification-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Certifications"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Certifications"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/certifications/{personCertification-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Certifications"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Certifications"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Certifications"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/certifications/{personCertification-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Certifications"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/certifications/{personCertification-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Certifications"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/educationalActivities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Educational Activities"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Educational Activities"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Educational Activities"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Educational Activities"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Educational Activities"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Educational Activities"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Educational Activities"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Educational Activities"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Educational Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/educationalActivities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Educational Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/educationalActivities<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Educational Activities"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/profile/educationalActivities/{educationalActivity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Educational Activities"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Educational Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/educationalActivities/{educationalActivity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Educational Activities"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Educational Activities"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Educational Activities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/educationalActivities/{educationalActivity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Educational Activities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/educationalActivities/{educationalActivity-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Educational Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/emails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Emails"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Emails"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Emails"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Emails"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Emails"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Emails"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Emails"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Emails"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Emails"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/emails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Emails"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/emails<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Emails"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/profile/emails/{itemEmail-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Emails"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Emails"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/emails/{itemEmail-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Emails"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Emails"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Emails"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/emails/{itemEmail-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Emails"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/emails/{itemEmail-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Emails"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/interests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Interests"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Interests"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Interests"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Interests"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Interests"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Interests"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Interests"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Interests"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Interests"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/interests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Interests"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/interests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Interests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/profile/interests/{personInterest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Interests"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Interests"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/interests/{personInterest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Interests"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Interests"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Interests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/interests/{personInterest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Interests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/interests/{personInterest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Interests"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/languages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Languages"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Languages"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Languages"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Languages"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Languages"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Languages"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Languages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Languages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Languages"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/languages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Languages"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/languages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Languages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/profile/languages/{languageProficiency-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Languages"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Languages"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/languages/{languageProficiency-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Languages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Languages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Languages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/languages/{languageProficiency-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Languages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/languages/{languageProficiency-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Languages"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/names",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Names"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Names"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Names"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Names"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Names"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Names"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Names"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Names"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Names"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/names",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Names"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/names<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Names"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/profile/names/{personName-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Names"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Names"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/names/{personName-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Names"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Names"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Names"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/names/{personName-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Names"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/names/{personName-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Names"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/notes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Notes"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Notes"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Notes"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Notes"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Notes"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Notes"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Notes"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Notes"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Notes"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/notes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Notes"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/notes<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Notes"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/profile/notes/{personAnnotation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Notes"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Notes"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/notes/{personAnnotation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Notes"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Notes"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Notes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/notes/{personAnnotation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Notes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/notes/{personAnnotation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Notes"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/patents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Patents"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Patents"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Patents"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Patents"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Patents"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Patents"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Patents"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Patents"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Patents"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/patents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Patents"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/patents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Patents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/profile/patents/{itemPatent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Patents"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Patents"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/patents/{itemPatent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Patents"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Patents"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Patents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/patents/{itemPatent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Patents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/patents/{itemPatent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Patents"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/phones",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Phones"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Phones"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Phones"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Phones"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Phones"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Phones"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Phones"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Phones"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Phones"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/phones",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Phones"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/phones<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Phones"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/profile/phones/{itemPhone-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Phones"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Phones"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/phones/{itemPhone-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Phones"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Phones"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Phones"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/phones/{itemPhone-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Phones"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/phones/{itemPhone-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Phones"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/positions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Positions"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Positions"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Positions"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Positions"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Positions"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Positions"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Positions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Positions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Positions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/positions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Positions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/positions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Positions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/profile/positions/{workPosition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Positions"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Positions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/positions/{workPosition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Positions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Positions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Positions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/positions/{workPosition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Positions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/positions/{workPosition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Positions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/projects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Projects"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Projects"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Projects"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Projects"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Projects"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Projects"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Projects"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Projects"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Projects"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/projects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Projects"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/projects<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Projects"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/profile/projects/{projectParticipation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Projects"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Projects"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/projects/{projectParticipation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Projects"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Projects"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Projects"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/projects/{projectParticipation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Projects"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/projects/{projectParticipation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Projects"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/publications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Publications"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Publications"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Publications"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Publications"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Publications"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Publications"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Publications"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Publications"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Publications"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/publications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Publications"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/publications<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Publications"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/profile/publications/{itemPublication-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Publications"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Publications"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/publications/{itemPublication-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Publications"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Publications"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Publications"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/publications/{itemPublication-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Publications"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/publications/{itemPublication-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Publications"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/skills",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Skills"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Skills"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Skills"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Skills"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Skills"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Skills"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Skills"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Skills"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Skills"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/skills",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Skills"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/skills<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Skills"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/profile/skills/{skillProficiency-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Skills"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Skills"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/skills/{skillProficiency-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Skills"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Skills"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Skills"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/skills/{skillProficiency-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Skills"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/skills/{skillProficiency-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Skills"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/webAccounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Web Accounts"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Web Accounts"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Web Accounts"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Web Accounts"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Web Accounts"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Web Accounts"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Web Accounts"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Web Accounts"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Web Accounts"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/webAccounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Web Accounts"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/webAccounts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Web Accounts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/profile/webAccounts/{webAccount-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Web Accounts"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Web Accounts"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/webAccounts/{webAccount-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Web Accounts"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Web Accounts"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Web Accounts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/webAccounts/{webAccount-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Web Accounts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/webAccounts/{webAccount-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Web Accounts"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/websites",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Websites"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Websites"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Websites"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Websites"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Websites"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Websites"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Websites"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Websites"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile List Websites"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/websites",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Websites"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/profile/websites<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Create Websites"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/profile/websites/{personWebsite-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Websites"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Delete Websites"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/profile/websites/{personWebsite-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Websites"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Websites"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Get Websites"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/websites/{personWebsite-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Websites"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/profile/websites/{personWebsite-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile"
					],
					"operation": [
						"Users Profile Update Websites"
					]
				}
			}
		},
];
