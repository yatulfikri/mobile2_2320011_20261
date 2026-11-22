import { StyleSheet } from "react-native";
export const homeStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  scrollContent: {
    padding: 20,
    gap: 16,
  },
  welcomeCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  statusBadge: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#ECFDF5",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    marginBottom: 10,
  },
  statusBadgeText: {
    fontSize: 11.5,
    fontWeight: "700",
    color: "#059669",
  },
  greetingTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#0F172A",
  },
  greetingEmail: {
    fontSize: 13.5,
    color: "#2563EB",
    fontWeight: "600",
    marginTop: 2,
  },
  menuCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  menuHeader: {
    marginBottom: 16,
  },
  menuSectionTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#0F172A",
  },
  menuSectionSubtitle: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 2,
  },
  menuGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 18,
  },
  menuItem: {
    width: "30%",
    alignItems: "center",
  },
  menuIconWrapper: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  menuLabel: {
    fontSize: 11.5,
    fontWeight: "700",
    color: "#1E293B",
    textAlign: "center",
    marginTop: 6,
  },
  iconBgBlue: {
    backgroundColor: "#EFF6FF",
    borderColor: "#DBEAFE",
  },
  iconBgGreen: {
    backgroundColor: "#ECFDF5",
    borderColor: "#D1FAE5",
  },
  iconBgAmber: {
    backgroundColor: "#FFFBEB",
    borderColor: "#FEF3C7",
  },
  iconBgTeal: {
    backgroundColor: "#F0FDFA",
    borderColor: "#CCFBF1",
  },
  iconBgRose: {
    backgroundColor: "#FFF1F2",
    borderColor: "#FFE4E6",
  },
});
