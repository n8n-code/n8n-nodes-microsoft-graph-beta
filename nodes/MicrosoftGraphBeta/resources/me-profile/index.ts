import type { INodeProperties } from 'n8n-workflow';

export const meProfileDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					]
				}
			},
			"options": [
				{
					"name": "Me Delete Profile",
					"value": "Me Delete Profile",
					"action": "Delete profile",
					"description": "Deletes a profile object from a user's account.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/profile"
						}
					}
				},
				{
					"name": "Me Get Profile",
					"value": "Me Get Profile",
					"action": "Get profile",
					"description": "Retrieve the properties and relationships of a profile object for a given user. The **profile** resource exposes various rich properties that are descriptive of the user as relationships, for example, anniversaries and education activities. To get one of these navigation properties, use the corresponding GET method on that property. See the methods exposed by **profile**.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile"
						}
					}
				},
				{
					"name": "Me Update Profile",
					"value": "Me Update Profile",
					"action": "Update the navigation property profile in me",
					"description": "Update the navigation property profile in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/profile"
						}
					}
				},
				{
					"name": "Me Profile List Account",
					"value": "Me Profile List Account",
					"action": "List accounts",
					"description": "Retrieves properties related to the user's accounts from the profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/account"
						}
					}
				},
				{
					"name": "Me Profile Create Account",
					"value": "Me Profile Create Account",
					"action": "Create account",
					"description": "Create a new userAccountInformation object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/profile/account"
						}
					}
				},
				{
					"name": "Me Profile Delete Account",
					"value": "Me Profile Delete Account",
					"action": "Delete navigation property account for me",
					"description": "Delete navigation property account for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/profile/account/{{$parameter[\"userAccountInformation-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Get Account",
					"value": "Me Profile Get Account",
					"action": "Get account from me",
					"description": "Get account from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/account/{{$parameter[\"userAccountInformation-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Update Account",
					"value": "Me Profile Update Account",
					"action": "Update the navigation property account in me",
					"description": "Update the navigation property account in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/profile/account/{{$parameter[\"userAccountInformation-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile List Addresses",
					"value": "Me Profile List Addresses",
					"action": "List addresses",
					"description": "Get the itemAddress resources from the **addresses** navigation property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/addresses"
						}
					}
				},
				{
					"name": "Me Profile Create Addresses",
					"value": "Me Profile Create Addresses",
					"action": "Create addresses",
					"description": "Create a new itemAddress object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/profile/addresses"
						}
					}
				},
				{
					"name": "Me Profile Delete Addresses",
					"value": "Me Profile Delete Addresses",
					"action": "Delete navigation property addresses for me",
					"description": "Delete navigation property addresses for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/profile/addresses/{{$parameter[\"itemAddress-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Get Addresses",
					"value": "Me Profile Get Addresses",
					"action": "Get addresses from me",
					"description": "Represents details of addresses associated with the user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/addresses/{{$parameter[\"itemAddress-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Update Addresses",
					"value": "Me Profile Update Addresses",
					"action": "Update the navigation property addresses in me",
					"description": "Update the navigation property addresses in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/profile/addresses/{{$parameter[\"itemAddress-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile List Anniversaries",
					"value": "Me Profile List Anniversaries",
					"action": "List anniversaries",
					"description": "Retrieve a list of personAnniversary objects for the given user from their profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/anniversaries"
						}
					}
				},
				{
					"name": "Me Profile Create Anniversaries",
					"value": "Me Profile Create Anniversaries",
					"action": "Create personAnniversary",
					"description": "Use this API to create a new personAnniversary object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/profile/anniversaries"
						}
					}
				},
				{
					"name": "Me Profile Delete Anniversaries",
					"value": "Me Profile Delete Anniversaries",
					"action": "Delete navigation property anniversaries for me",
					"description": "Delete navigation property anniversaries for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/profile/anniversaries/{{$parameter[\"personAnnualEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Get Anniversaries",
					"value": "Me Profile Get Anniversaries",
					"action": "Get anniversaries from me",
					"description": "Represents the details of meaningful dates associated with a person.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/anniversaries/{{$parameter[\"personAnnualEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Update Anniversaries",
					"value": "Me Profile Update Anniversaries",
					"action": "Update the navigation property anniversaries in me",
					"description": "Update the navigation property anniversaries in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/profile/anniversaries/{{$parameter[\"personAnnualEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile List Awards",
					"value": "Me Profile List Awards",
					"action": "List awards",
					"description": "Retrieve a list of personAward objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/awards"
						}
					}
				},
				{
					"name": "Me Profile Create Awards",
					"value": "Me Profile Create Awards",
					"action": "Create personAward",
					"description": "Create a new personAward object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/profile/awards"
						}
					}
				},
				{
					"name": "Me Profile Delete Awards",
					"value": "Me Profile Delete Awards",
					"action": "Delete navigation property awards for me",
					"description": "Delete navigation property awards for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/profile/awards/{{$parameter[\"personAward-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Get Awards",
					"value": "Me Profile Get Awards",
					"action": "Get awards from me",
					"description": "Represents the details of awards or honors associated with a person.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/awards/{{$parameter[\"personAward-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Update Awards",
					"value": "Me Profile Update Awards",
					"action": "Update the navigation property awards in me",
					"description": "Update the navigation property awards in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/profile/awards/{{$parameter[\"personAward-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile List Certifications",
					"value": "Me Profile List Certifications",
					"action": "List certifications",
					"description": "Retrieve a list of personCertification objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/certifications"
						}
					}
				},
				{
					"name": "Me Profile Create Certifications",
					"value": "Me Profile Create Certifications",
					"action": "Create personCertification",
					"description": "Create a new personCertification object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/profile/certifications"
						}
					}
				},
				{
					"name": "Me Profile Delete Certifications",
					"value": "Me Profile Delete Certifications",
					"action": "Delete navigation property certifications for me",
					"description": "Delete navigation property certifications for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/profile/certifications/{{$parameter[\"personCertification-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Get Certifications",
					"value": "Me Profile Get Certifications",
					"action": "Get certifications from me",
					"description": "Represents the details of certifications associated with a person.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/certifications/{{$parameter[\"personCertification-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Update Certifications",
					"value": "Me Profile Update Certifications",
					"action": "Update the navigation property certifications in me",
					"description": "Update the navigation property certifications in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/profile/certifications/{{$parameter[\"personCertification-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile List Educational Activities",
					"value": "Me Profile List Educational Activities",
					"action": "List educationalActivities",
					"description": "Retrieve a list of educationalActivity objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/educationalActivities"
						}
					}
				},
				{
					"name": "Me Profile Create Educational Activities",
					"value": "Me Profile Create Educational Activities",
					"action": "Create educationalActivity",
					"description": "Create a new educationalActivity in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/profile/educationalActivities"
						}
					}
				},
				{
					"name": "Me Profile Delete Educational Activities",
					"value": "Me Profile Delete Educational Activities",
					"action": "Delete navigation property educationalActivities for me",
					"description": "Delete navigation property educationalActivities for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/profile/educationalActivities/{{$parameter[\"educationalActivity-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Get Educational Activities",
					"value": "Me Profile Get Educational Activities",
					"action": "Get educationalActivities from me",
					"description": "Represents data that a user has supplied related to undergraduate, graduate, postgraduate or other educational activities.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/educationalActivities/{{$parameter[\"educationalActivity-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Update Educational Activities",
					"value": "Me Profile Update Educational Activities",
					"action": "Update the navigation property educationalActivities in me",
					"description": "Update the navigation property educationalActivities in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/profile/educationalActivities/{{$parameter[\"educationalActivity-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile List Emails",
					"value": "Me Profile List Emails",
					"action": "List emails",
					"description": "Retrieve a list of itemEmail objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/emails"
						}
					}
				},
				{
					"name": "Me Profile Create Emails",
					"value": "Me Profile Create Emails",
					"action": "Create itemEmail",
					"description": "Create a new itemEmail object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/profile/emails"
						}
					}
				},
				{
					"name": "Me Profile Delete Emails",
					"value": "Me Profile Delete Emails",
					"action": "Delete navigation property emails for me",
					"description": "Delete navigation property emails for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/profile/emails/{{$parameter[\"itemEmail-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Get Emails",
					"value": "Me Profile Get Emails",
					"action": "Get emails from me",
					"description": "Represents detailed information about email addresses associated with the user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/emails/{{$parameter[\"itemEmail-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Update Emails",
					"value": "Me Profile Update Emails",
					"action": "Update the navigation property emails in me",
					"description": "Update the navigation property emails in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/profile/emails/{{$parameter[\"itemEmail-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile List Interests",
					"value": "Me Profile List Interests",
					"action": "List interests",
					"description": "Retrieve a list of personInterest objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/interests"
						}
					}
				},
				{
					"name": "Me Profile Create Interests",
					"value": "Me Profile Create Interests",
					"action": "Create personInterest",
					"description": "Create a new personInterest.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/profile/interests"
						}
					}
				},
				{
					"name": "Me Profile Delete Interests",
					"value": "Me Profile Delete Interests",
					"action": "Delete navigation property interests for me",
					"description": "Delete navigation property interests for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/profile/interests/{{$parameter[\"personInterest-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Get Interests",
					"value": "Me Profile Get Interests",
					"action": "Get interests from me",
					"description": "Provides detailed information about interests the user has associated with themselves in various services.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/interests/{{$parameter[\"personInterest-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Update Interests",
					"value": "Me Profile Update Interests",
					"action": "Update the navigation property interests in me",
					"description": "Update the navigation property interests in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/profile/interests/{{$parameter[\"personInterest-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile List Languages",
					"value": "Me Profile List Languages",
					"action": "List languages",
					"description": "Retrieve a list of languageProficiency objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/languages"
						}
					}
				},
				{
					"name": "Me Profile Create Languages",
					"value": "Me Profile Create Languages",
					"action": "Create languageProficiency",
					"description": "Use this API to create a new languageProficiency object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/profile/languages"
						}
					}
				},
				{
					"name": "Me Profile Delete Languages",
					"value": "Me Profile Delete Languages",
					"action": "Delete navigation property languages for me",
					"description": "Delete navigation property languages for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/profile/languages/{{$parameter[\"languageProficiency-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Get Languages",
					"value": "Me Profile Get Languages",
					"action": "Get languages from me",
					"description": "Represents detailed information about languages that a user has added to their profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/languages/{{$parameter[\"languageProficiency-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Update Languages",
					"value": "Me Profile Update Languages",
					"action": "Update the navigation property languages in me",
					"description": "Update the navigation property languages in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/profile/languages/{{$parameter[\"languageProficiency-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile List Names",
					"value": "Me Profile List Names",
					"action": "List names",
					"description": "Retrieve a list of personName objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/names"
						}
					}
				},
				{
					"name": "Me Profile Create Names",
					"value": "Me Profile Create Names",
					"action": "Create personName",
					"description": "Use this API to create a new personName object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/profile/names"
						}
					}
				},
				{
					"name": "Me Profile Delete Names",
					"value": "Me Profile Delete Names",
					"action": "Delete navigation property names for me",
					"description": "Delete navigation property names for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/profile/names/{{$parameter[\"personName-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Get Names",
					"value": "Me Profile Get Names",
					"action": "Get names from me",
					"description": "Represents the names a user has added to their profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/names/{{$parameter[\"personName-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Update Names",
					"value": "Me Profile Update Names",
					"action": "Update the navigation property names in me",
					"description": "Update the navigation property names in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/profile/names/{{$parameter[\"personName-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile List Notes",
					"value": "Me Profile List Notes",
					"action": "List notes",
					"description": "Retrieve a list of personAnnotation objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/notes"
						}
					}
				},
				{
					"name": "Me Profile Create Notes",
					"value": "Me Profile Create Notes",
					"action": "Create personAnnotation",
					"description": "Create a new personAnnotation object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/profile/notes"
						}
					}
				},
				{
					"name": "Me Profile Delete Notes",
					"value": "Me Profile Delete Notes",
					"action": "Delete navigation property notes for me",
					"description": "Delete navigation property notes for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/profile/notes/{{$parameter[\"personAnnotation-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Get Notes",
					"value": "Me Profile Get Notes",
					"action": "Get notes from me",
					"description": "Represents notes that a user has added to their profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/notes/{{$parameter[\"personAnnotation-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Update Notes",
					"value": "Me Profile Update Notes",
					"action": "Update the navigation property notes in me",
					"description": "Update the navigation property notes in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/profile/notes/{{$parameter[\"personAnnotation-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile List Patents",
					"value": "Me Profile List Patents",
					"action": "List patents",
					"description": "Retrieve a list of itemPatent objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/patents"
						}
					}
				},
				{
					"name": "Me Profile Create Patents",
					"value": "Me Profile Create Patents",
					"action": "Create itemPatent",
					"description": "Create a new itemPatent object within a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/profile/patents"
						}
					}
				},
				{
					"name": "Me Profile Delete Patents",
					"value": "Me Profile Delete Patents",
					"action": "Delete navigation property patents for me",
					"description": "Delete navigation property patents for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/profile/patents/{{$parameter[\"itemPatent-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Get Patents",
					"value": "Me Profile Get Patents",
					"action": "Get patents from me",
					"description": "Represents patents that a user has added to their profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/patents/{{$parameter[\"itemPatent-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Update Patents",
					"value": "Me Profile Update Patents",
					"action": "Update the navigation property patents in me",
					"description": "Update the navigation property patents in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/profile/patents/{{$parameter[\"itemPatent-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile List Phones",
					"value": "Me Profile List Phones",
					"action": "List phones",
					"description": "Retrieve a list of itemPhone objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/phones"
						}
					}
				},
				{
					"name": "Me Profile Create Phones",
					"value": "Me Profile Create Phones",
					"action": "Create itemPhoneNumber",
					"description": "Use this API to create a new itemPhone object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/profile/phones"
						}
					}
				},
				{
					"name": "Me Profile Delete Phones",
					"value": "Me Profile Delete Phones",
					"action": "Delete navigation property phones for me",
					"description": "Delete navigation property phones for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/profile/phones/{{$parameter[\"itemPhone-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Get Phones",
					"value": "Me Profile Get Phones",
					"action": "Get phones from me",
					"description": "Represents detailed information about phone numbers associated with a user in various services.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/phones/{{$parameter[\"itemPhone-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Update Phones",
					"value": "Me Profile Update Phones",
					"action": "Update the navigation property phones in me",
					"description": "Update the navigation property phones in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/profile/phones/{{$parameter[\"itemPhone-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile List Positions",
					"value": "Me Profile List Positions",
					"action": "List positions",
					"description": "Retrieve a list of workPosition objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/positions"
						}
					}
				},
				{
					"name": "Me Profile Create Positions",
					"value": "Me Profile Create Positions",
					"action": "Create workPosition",
					"description": "Use this API to create a new workPosition in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/profile/positions"
						}
					}
				},
				{
					"name": "Me Profile Delete Positions",
					"value": "Me Profile Delete Positions",
					"action": "Delete navigation property positions for me",
					"description": "Delete navigation property positions for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/profile/positions/{{$parameter[\"workPosition-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Get Positions",
					"value": "Me Profile Get Positions",
					"action": "Get positions from me",
					"description": "Represents detailed information about work positions associated with a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/positions/{{$parameter[\"workPosition-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Update Positions",
					"value": "Me Profile Update Positions",
					"action": "Update the navigation property positions in me",
					"description": "Update the navigation property positions in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/profile/positions/{{$parameter[\"workPosition-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile List Projects",
					"value": "Me Profile List Projects",
					"action": "List projects",
					"description": "Retrieve a list of projectParticipation objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/projects"
						}
					}
				},
				{
					"name": "Me Profile Create Projects",
					"value": "Me Profile Create Projects",
					"action": "Create projectParticipation",
					"description": "Use this API to create a new projectParticipation object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/profile/projects"
						}
					}
				},
				{
					"name": "Me Profile Delete Projects",
					"value": "Me Profile Delete Projects",
					"action": "Delete navigation property projects for me",
					"description": "Delete navigation property projects for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/profile/projects/{{$parameter[\"projectParticipation-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Get Projects",
					"value": "Me Profile Get Projects",
					"action": "Get projects from me",
					"description": "Represents detailed information about projects associated with a user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/projects/{{$parameter[\"projectParticipation-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Update Projects",
					"value": "Me Profile Update Projects",
					"action": "Update the navigation property projects in me",
					"description": "Update the navigation property projects in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/profile/projects/{{$parameter[\"projectParticipation-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile List Publications",
					"value": "Me Profile List Publications",
					"action": "List publications",
					"description": "Retrieve a list of itemPublication objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/publications"
						}
					}
				},
				{
					"name": "Me Profile Create Publications",
					"value": "Me Profile Create Publications",
					"action": "Create itemPublication",
					"description": "Create a new itemPublication object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/profile/publications"
						}
					}
				},
				{
					"name": "Me Profile Delete Publications",
					"value": "Me Profile Delete Publications",
					"action": "Delete navigation property publications for me",
					"description": "Delete navigation property publications for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/profile/publications/{{$parameter[\"itemPublication-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Get Publications",
					"value": "Me Profile Get Publications",
					"action": "Get publications from me",
					"description": "Represents details of any publications a user has added to their profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/publications/{{$parameter[\"itemPublication-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Update Publications",
					"value": "Me Profile Update Publications",
					"action": "Update the navigation property publications in me",
					"description": "Update the navigation property publications in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/profile/publications/{{$parameter[\"itemPublication-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile List Skills",
					"value": "Me Profile List Skills",
					"action": "List skills",
					"description": "Retrieve a list of skillProficiency objects in a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/skills"
						}
					}
				},
				{
					"name": "Me Profile Create Skills",
					"value": "Me Profile Create Skills",
					"action": "Create skillProficiency",
					"description": "Use this API to create a new skillProficiency object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/profile/skills"
						}
					}
				},
				{
					"name": "Me Profile Delete Skills",
					"value": "Me Profile Delete Skills",
					"action": "Delete navigation property skills for me",
					"description": "Delete navigation property skills for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/profile/skills/{{$parameter[\"skillProficiency-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Get Skills",
					"value": "Me Profile Get Skills",
					"action": "Get skills from me",
					"description": "Represents detailed information about skills associated with a user in various services.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/skills/{{$parameter[\"skillProficiency-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Update Skills",
					"value": "Me Profile Update Skills",
					"action": "Update the navigation property skills in me",
					"description": "Update the navigation property skills in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/profile/skills/{{$parameter[\"skillProficiency-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile List Web Accounts",
					"value": "Me Profile List Web Accounts",
					"action": "List webAccounts",
					"description": "Retrieve a list of webAccounts objects from the user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/webAccounts"
						}
					}
				},
				{
					"name": "Me Profile Create Web Accounts",
					"value": "Me Profile Create Web Accounts",
					"action": "Create webAccount",
					"description": "Create a new webAccount object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/profile/webAccounts"
						}
					}
				},
				{
					"name": "Me Profile Delete Web Accounts",
					"value": "Me Profile Delete Web Accounts",
					"action": "Delete navigation property webAccounts for me",
					"description": "Delete navigation property webAccounts for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/profile/webAccounts/{{$parameter[\"webAccount-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Get Web Accounts",
					"value": "Me Profile Get Web Accounts",
					"action": "Get webAccounts from me",
					"description": "Represents web accounts the user has indicated they use or has added to their user profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/webAccounts/{{$parameter[\"webAccount-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Update Web Accounts",
					"value": "Me Profile Update Web Accounts",
					"action": "Update the navigation property webAccounts in me",
					"description": "Update the navigation property webAccounts in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/profile/webAccounts/{{$parameter[\"webAccount-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile List Websites",
					"value": "Me Profile List Websites",
					"action": "List websites",
					"description": "Retrieve a list of personWebsite objects from a user's profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/websites"
						}
					}
				},
				{
					"name": "Me Profile Create Websites",
					"value": "Me Profile Create Websites",
					"action": "Create personWebsite",
					"description": "Create a new personWebsite object in a user's profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/profile/websites"
						}
					}
				},
				{
					"name": "Me Profile Delete Websites",
					"value": "Me Profile Delete Websites",
					"action": "Delete navigation property websites for me",
					"description": "Delete navigation property websites for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/profile/websites/{{$parameter[\"personWebsite-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Get Websites",
					"value": "Me Profile Get Websites",
					"action": "Get websites from me",
					"description": "Represents detailed information about websites associated with a user in various services.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/profile/websites/{{$parameter[\"personWebsite-id\"]}}"
						}
					}
				},
				{
					"name": "Me Profile Update Websites",
					"value": "Me Profile Update Websites",
					"action": "Update the navigation property websites in me",
					"description": "Update the navigation property websites in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/profile/websites/{{$parameter[\"personWebsite-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /me/profile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Delete Profile"
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
						"Me Profile"
					],
					"operation": [
						"Me Delete Profile"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Get Profile"
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
						"Me Profile"
					],
					"operation": [
						"Me Get Profile"
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
						"Me Profile"
					],
					"operation": [
						"Me Get Profile"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Update Profile"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Update Profile"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile List Account"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Account"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Account"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Account"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Account"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Account"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Account"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Account"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Account"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Account"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/account<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Account"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/profile/account/{userAccountInformation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Account"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Account"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/account/{userAccountInformation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Account"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Account"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Account"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/account/{userAccountInformation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Account"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/account/{userAccountInformation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Account"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/addresses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile List Addresses"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Addresses"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Addresses"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Addresses"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Addresses"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Addresses"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Addresses"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Addresses"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Addresses"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/addresses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Addresses"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/addresses<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Addresses"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/profile/addresses/{itemAddress-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Addresses"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Addresses"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/addresses/{itemAddress-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Addresses"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Addresses"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Addresses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/addresses/{itemAddress-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Addresses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/addresses/{itemAddress-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Addresses"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/anniversaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile List Anniversaries"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Anniversaries"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Anniversaries"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Anniversaries"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Anniversaries"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Anniversaries"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Anniversaries"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Anniversaries"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Anniversaries"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/anniversaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Anniversaries"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/anniversaries<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Anniversaries"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/profile/anniversaries/{personAnnualEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Anniversaries"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Anniversaries"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/anniversaries/{personAnnualEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Anniversaries"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Anniversaries"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Anniversaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/anniversaries/{personAnnualEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Anniversaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/anniversaries/{personAnnualEvent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Anniversaries"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/awards",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile List Awards"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Awards"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Awards"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Awards"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Awards"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Awards"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Awards"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Awards"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Awards"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/awards",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Awards"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/awards<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Awards"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/profile/awards/{personAward-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Awards"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Awards"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/awards/{personAward-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Awards"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Awards"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Awards"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/awards/{personAward-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Awards"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/awards/{personAward-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Awards"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/certifications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile List Certifications"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Certifications"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Certifications"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Certifications"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Certifications"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Certifications"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Certifications"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Certifications"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Certifications"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/certifications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Certifications"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/certifications<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Certifications"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/profile/certifications/{personCertification-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Certifications"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Certifications"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/certifications/{personCertification-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Certifications"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Certifications"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Certifications"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/certifications/{personCertification-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Certifications"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/certifications/{personCertification-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Certifications"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/educationalActivities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile List Educational Activities"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Educational Activities"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Educational Activities"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Educational Activities"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Educational Activities"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Educational Activities"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Educational Activities"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Educational Activities"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Educational Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/educationalActivities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Educational Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/educationalActivities<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Educational Activities"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/profile/educationalActivities/{educationalActivity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Educational Activities"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Educational Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/educationalActivities/{educationalActivity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Educational Activities"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Educational Activities"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Educational Activities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/educationalActivities/{educationalActivity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Educational Activities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/educationalActivities/{educationalActivity-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Educational Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/emails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile List Emails"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Emails"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Emails"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Emails"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Emails"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Emails"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Emails"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Emails"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Emails"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/emails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Emails"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/emails<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Emails"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/profile/emails/{itemEmail-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Emails"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Emails"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/emails/{itemEmail-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Emails"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Emails"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Emails"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/emails/{itemEmail-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Emails"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/emails/{itemEmail-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Emails"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/interests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile List Interests"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Interests"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Interests"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Interests"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Interests"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Interests"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Interests"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Interests"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Interests"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/interests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Interests"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/interests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Interests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/profile/interests/{personInterest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Interests"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Interests"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/interests/{personInterest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Interests"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Interests"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Interests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/interests/{personInterest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Interests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/interests/{personInterest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Interests"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/languages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile List Languages"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Languages"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Languages"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Languages"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Languages"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Languages"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Languages"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Languages"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Languages"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/languages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Languages"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/languages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Languages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/profile/languages/{languageProficiency-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Languages"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Languages"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/languages/{languageProficiency-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Languages"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Languages"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Languages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/languages/{languageProficiency-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Languages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/languages/{languageProficiency-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Languages"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/names",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile List Names"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Names"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Names"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Names"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Names"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Names"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Names"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Names"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Names"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/names",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Names"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/names<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Names"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/profile/names/{personName-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Names"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Names"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/names/{personName-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Names"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Names"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Names"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/names/{personName-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Names"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/names/{personName-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Names"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/notes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile List Notes"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Notes"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Notes"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Notes"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Notes"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Notes"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Notes"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Notes"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Notes"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/notes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Notes"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/notes<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Notes"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/profile/notes/{personAnnotation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Notes"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Notes"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/notes/{personAnnotation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Notes"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Notes"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Notes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/notes/{personAnnotation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Notes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/notes/{personAnnotation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Notes"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/patents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile List Patents"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Patents"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Patents"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Patents"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Patents"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Patents"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Patents"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Patents"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Patents"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/patents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Patents"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/patents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Patents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/profile/patents/{itemPatent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Patents"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Patents"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/patents/{itemPatent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Patents"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Patents"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Patents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/patents/{itemPatent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Patents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/patents/{itemPatent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Patents"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/phones",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile List Phones"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Phones"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Phones"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Phones"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Phones"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Phones"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Phones"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Phones"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Phones"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/phones",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Phones"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/phones<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Phones"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/profile/phones/{itemPhone-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Phones"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Phones"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/phones/{itemPhone-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Phones"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Phones"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Phones"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/phones/{itemPhone-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Phones"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/phones/{itemPhone-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Phones"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/positions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile List Positions"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Positions"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Positions"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Positions"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Positions"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Positions"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Positions"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Positions"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Positions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/positions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Positions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/positions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Positions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/profile/positions/{workPosition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Positions"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Positions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/positions/{workPosition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Positions"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Positions"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Positions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/positions/{workPosition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Positions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/positions/{workPosition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Positions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/projects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile List Projects"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Projects"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Projects"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Projects"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Projects"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Projects"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Projects"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Projects"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Projects"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/projects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Projects"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/projects<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Projects"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/profile/projects/{projectParticipation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Projects"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Projects"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/projects/{projectParticipation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Projects"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Projects"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Projects"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/projects/{projectParticipation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Projects"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/projects/{projectParticipation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Projects"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/publications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile List Publications"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Publications"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Publications"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Publications"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Publications"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Publications"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Publications"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Publications"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Publications"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/publications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Publications"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/publications<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Publications"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/profile/publications/{itemPublication-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Publications"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Publications"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/publications/{itemPublication-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Publications"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Publications"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Publications"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/publications/{itemPublication-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Publications"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/publications/{itemPublication-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Publications"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/skills",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile List Skills"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Skills"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Skills"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Skills"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Skills"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Skills"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Skills"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Skills"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Skills"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/skills",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Skills"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/skills<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Skills"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/profile/skills/{skillProficiency-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Skills"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Skills"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/skills/{skillProficiency-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Skills"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Skills"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Skills"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/skills/{skillProficiency-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Skills"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/skills/{skillProficiency-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Skills"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/webAccounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile List Web Accounts"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Web Accounts"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Web Accounts"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Web Accounts"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Web Accounts"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Web Accounts"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Web Accounts"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Web Accounts"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Web Accounts"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/webAccounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Web Accounts"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/webAccounts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Web Accounts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/profile/webAccounts/{webAccount-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Web Accounts"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Web Accounts"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/webAccounts/{webAccount-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Web Accounts"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Web Accounts"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Web Accounts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/webAccounts/{webAccount-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Web Accounts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/webAccounts/{webAccount-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Web Accounts"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/websites",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile List Websites"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Websites"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Websites"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Websites"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Websites"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Websites"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Websites"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Websites"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile List Websites"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/websites",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Websites"
					]
				}
			}
		},
		{
			"displayName": "POST /me/profile/websites<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Create Websites"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/profile/websites/{personWebsite-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Websites"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Delete Websites"
					]
				}
			}
		},
		{
			"displayName": "GET /me/profile/websites/{personWebsite-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Websites"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Websites"
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
						"Me Profile"
					],
					"operation": [
						"Me Profile Get Websites"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/websites/{personWebsite-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Websites"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/profile/websites/{personWebsite-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile"
					],
					"operation": [
						"Me Profile Update Websites"
					]
				}
			}
		},
];
